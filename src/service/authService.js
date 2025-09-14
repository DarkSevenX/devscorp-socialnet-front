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
    const token = data.access_token
    if (error) throw error
    return {token}
  }
}
