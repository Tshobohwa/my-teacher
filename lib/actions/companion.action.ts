"use server";

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion) => {
     const {userId: author } = await auth();
     const supabase = createSupabaseClient();

     const {data, error} = await supabase
         .from("companions")
         .insert({...formData, author})
         .select()

    if (error || !data) throw new Error(error?.message || "Failed to create a companion");

    return data[0];
}

export const getAllCompanions = async ({limit = 1, page = 1, subject , topic}: Companion) => {
    const supabase = createSupabaseClient();

    let query = supabase.from("companions").select();

    if(subject && topic) {
        query = query.ilike("subject", `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if(subject) {
        query = query.ilike("subject", `%${subject}%`)
    } else if(topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }
    query = query.range(page - 1, page * limit - 1);

    const {data: companions, error} = await query;

    if (error) throw new Error(error?.message || "Failed to get all companions");

    return companions;

}

export const getCompanion = async (id: string) => {
    const supabase = createSupabaseClient();

    const {data, error} = await supabase
        .from("companions")
        .select()
        .eq("id", id);

    console.log("Companion",data[0])

    if(error) return console.error(error?.message || "Failed to get companion");

    return data[0];
}