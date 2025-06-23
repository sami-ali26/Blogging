import { Hono } from "hono";
import { decode, jwt, sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@samiali/meduim-common";
import { Environment } from "./blog";
type JwtPayload = {
  id: string | ""
}
export const userRouter = new Hono<Environment>();

userRouter.post("/signup", async (c) => {
  const UserBody = await c.req.json();
  const { success } = signupInput.safeParse(UserBody);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Send Correct inputs ",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  

  try {
    const userData = await prisma.user.create({
      data: {
        email: UserBody.email,
        name: UserBody.name,
        password: UserBody.password,
      },
    });
   

    const token = await sign({ id: userData.id }, c.env.JWT_SECRET);
    

    return c.json({
      messgae: "User Created successfully",
      token: token,
    });
  } catch (error) {
    c.status(411);
    return c.text("Invalid");
  }
});
userRouter.get('/info', async (c) => {
  const header = c.req.header('Authorization') || " "
  const token = header.split(' ')[1]

  const decode = (await verify(token, c.env.JWT_SECRET)) as JwtPayload
  if (!decode) {
    c.status(403)
    return c.json('Invalid')
  }
  const authorId = decode.id 
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  //@ts-ignore
  // console.log(authorId);
  
  const userinfo = await prisma.blog.findMany({
    where: {
      authorId: authorId,
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
  })
  //@ts-ignore
  // console.log(data);
  
  return c.json({
    userinfo,
  })

})
userRouter.post("/signin", async (c) => {
  const UserBody = await c.req.json();
  const { success } = signupInput.safeParse(UserBody);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Send Correct inputs ",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const FindUser = await prisma.user.findUnique({
      where: {
        email: UserBody.email,
        password: UserBody.password,
      },
    });
    if (!FindUser) {
      c.status(403);
      return c.json({
        message: "User not found",
      });
    }
    const token = await sign({ id: FindUser.id }, c.env.JWT_SECRET);

    return c.json({
      message: "successfully loged in",
      token: token,
    });
  } catch (error) {
    c.status(411);
    return c.text("Somthieng wrong");
  }
});
