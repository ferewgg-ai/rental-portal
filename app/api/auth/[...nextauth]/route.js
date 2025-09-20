import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const loadUsers = () => {
  try { return JSON.parse(process.env.TENANT_USERS || "[]"); }
  catch { return []; }
};

export const authOptions = {
  providers: [
    Credentials({
      name: "Tenant Login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = loadUsers();
        const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
        if (user) return { id: user.email, name: user.name, email: user.email };
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };