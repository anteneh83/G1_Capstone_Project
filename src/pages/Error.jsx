import {useRouteError,Link} from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error);
  if(error.status === 404){
    return (
      <main data-theme='winter' className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>page not found</h1>
          <p className='mt-6 text-lg leading-7'>sorry we couldn't find the page you are looking for.</p>
          <div className="mt-10">
            <Link to='/' className='btn btn-primary capitalize'>go back home</Link>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main data-theme='winter' className="grid min-h-screen place-items-center px-8">
    <div className="text-center">
      <p className="text-9xl font-semibold text-primary">404</p>
      <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>page not found</h1>
      <p className='mt-6 text-lg leading-7'>sorry we couldn't find the page you are looking for.</p>
      <div className="mt-10">
        <Link to='/' className='btn btn-primary capitalize'>go back home</Link>
      </div>
    </div>
  </main>
  )
}

export default Error