export default function Profile(){
  const user = JSON.parse(localStorage.getItem('user') || '{"name":"Guest","email":"guest@example.com","avatar":"https://i.pravatar.cc/150"}')
  return (
    <section className="my-6">
      <div className="card p-6 flex items-center gap-4">
        <img src={user.avatar} className="w-20 h-20 rounded-full" />
        <div>
          <div className="text-xl font-semibold">{user.name}</div>
          <div className="text-sm text-muted">{user.email}</div>
          <div className="mt-3 flex gap-2">
            <button className="btn">Edit Profile</button>
          </div>
        </div>
      </div>
    </section>
  )
}
