import { Quote } from "../Components/Quote";
import { Auth } from "../Components/Auth";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Auth type="signin" />
      </div>
      <div className="hidden  md:block">
        <Quote></Quote>
      </div>
    </div>
  );
};
