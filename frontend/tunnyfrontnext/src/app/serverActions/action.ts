"use server";

import { useRouter } from "next/navigation";

const idProduto = 123
const nomeProduto = "chicara"

export async function minhaServerAction() {
    const router = useRouter();
    router.push(`/produto/${idProduto}/${nomeProduto}`);
}