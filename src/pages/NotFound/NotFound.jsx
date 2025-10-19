import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mt-20 md:mt-40 lg:mt-40">
      <p className="text-4xl font-semibold text-center pt-10">
        Page not found 🤖
      </p>
      <div className="text-center">
        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  )
}
