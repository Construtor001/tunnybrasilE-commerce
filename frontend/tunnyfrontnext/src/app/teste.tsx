export default async function Teste(){

    const response = await fetch("http://localhost:3030",{
        cache: "no-store"
    });
    const users = await response.json();

    return(
        <div>
            {JSON.stringify(users, null, 2)}
        </div>
    )
}