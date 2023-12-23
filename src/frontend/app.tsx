import { Button } from '@wombo_combo/ui-library'
const App = () => {
  return (
    <main className={`flex flex-col justify-center items-center h-screen`}>
      <h1 className="text-red-500">
        Halllooooo
      </h1>
      <Button variant={`solid`} size={`lg`} className={`bg-blue-300`}>Click me</Button>
    </main>
  )
}

export default App
