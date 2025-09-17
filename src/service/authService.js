import { supabase } from "../utils/supabaseClient";

export class AuthService {
  async signUp (user) {
    const {username, email, password} = user
    const {error} = await supabase.auth.signUp({
      email,
      password,
      options: {
          data: {name: username}
      }
    })
    if (error) throw error
  }

  async signIn (user) {
    const {data, error} = await supabase.auth.signInWithPassword(user)
    if (error) throw error
    const token = data.session?.access_token
    const userData = data.user
    return { token, userData }
  }
}
