import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers:[
    CredentialsProvider({
    name: "User Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Unique Username" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const user = { id: "1", name: "AthangOP", email: "athangkali21@gmail.com" }
      if (user) {
        return user
      } else {
        return null
      }
    }
  })
  ]
})

export { handler as GET, handler as POST }