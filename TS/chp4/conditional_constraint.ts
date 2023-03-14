type MessageOf<T extends { message: string }> = T["message"];

interface Mail {
  message: string;
  time: string;
}

type EmailMsgContents = MessageOf<Mail>;
let email: EmailMsgContents;
email = "Hello Constraints Type";

console.log("Constraint Type : ", email);
