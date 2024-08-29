import { cookies } from "next/headers";
import SignUpBadgeClient from "./SignUpBadgeClient";

async function setSignUpBadgeCookie(value: string) {
  "use server";
  cookies().set("signup-badge", value);
}

export default function SignUpBadge() {
  const signupBadgeCookie = cookies().get("signup-badge");

  return (
    <SignUpBadgeClient
      hidden={signupBadgeCookie?.value === "hidden"}
      setSignUpBadgeCookie={setSignUpBadgeCookie}
    />
  );
}
