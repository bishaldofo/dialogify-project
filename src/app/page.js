import Image from 'next/image'

export default function Home() {
  return (
      <div>
        <h1 className='text-9xl'>This is Home page</h1>
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
        <h1>Stag Branch created</h1>
      </div>
  )
}
