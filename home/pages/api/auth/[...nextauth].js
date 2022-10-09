import NextAuth from 'next-auth'
import GithubProviders from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GithubProviders({
            clientId: process.env.GithubId,
            clientSecret: process.env.GithubSecret
        })
    ],
    // database: process.env.MONGODBURL,
    session: {
        jwt: true
    },
    jwt: {
        secret: "asjdbaskhdksbdk"
    },
    callbacks: {
        async jwt(token, user) {
            token.id = user.id
            if (user) {

                return token
            }
        },
        async sesion(session, token) {
            sesion.user.id = token.id

            return session
        }
    }
})