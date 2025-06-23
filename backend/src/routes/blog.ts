import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, decode, verify } from "hono/jwt";

export type Environment = {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
};
type JwtPayload = {
  id: string;
};
export const blogRouter = new Hono<Environment>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  const token = header?.split(" ")[1];

  try {
    const decode = (await verify(token, c.env.JWT_SECRET)) as JwtPayload;
    if (decode) {
      c.set("userId", decode.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not loged in",
      });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      message: "Your are unauthorized",
    });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const authorId = c.get("userId");
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId,
    },
  });
  return c.json({
    id: blog.id,
  });
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: blog.id,
  });
});
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogs = await prisma.blog.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json({
    blogs,
  });
});
blogRouter.delete("/:id", async (c) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.delete({
      where: {
        id: id,
      },
    });
    c.status(202);
    return c.json({
      message: "Deleted successfully",
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.text("Invalid Somtheing Can't delete");
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
      select: {
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
      }
    });
    

    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while fetching blog post",
    });
  }
});
