import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials) {
        if (
          credentials.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
          credentials.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        ) {
          return { id: "1", email: credentials.email }
        }
        return null
      },
    }),
  ],
})
