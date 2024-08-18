type Props = {
    promise: Promise<Post[]>
}


export default async function UserPost({promise}: Props) {
    const posts = await promise
    const content = posts.map(posts => {
        return(
            <article key={posts.id}>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
                <br />
            </article>
        )
    })
  return content;
}
