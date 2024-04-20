"use server"
import { createClient } from '@/utils/supabase/client'

const productList = async () => {
    const supabase = createClient()

    const { data, error } = await supabase.from("exercises").select()

    return{
        product: data,
        error,
    }
}

export default productList