import React from 'react'

function Home() {
    return (
        <div className="w-full">
            <section className='flex w-full h-30 justify-center align-center text-center mx-auto'>
                <div className="flex-1 border-r-2 border-blue-gray">
                    <h2 className="text-blue-gray font-bold text-xl">Kingston</h2>
                    <p>1112 Morton Blvd.</p>
                    <p>Kingston, NY 12401</p>
                    <p>(845) 336-0713</p>
                    <p>Fax: (845) 336-0714</p>
                </div>
                <div className="flex-1 border-l-2 border-r-2 border-blue-gray">
                    <h2 className="text-blue-gray font-bold text-xl">Poughkeepsie</h2>
                    <p>84 Patrick Lane</p>
                    <p>Poughkeepsie, NY 12603</p>
                    <p>(845) 471-8242</p>
                    <p>Fax: (845) 471-8243</p>
                </div>
                <div className="flex-1 border-l-2 border-blue-gray">
                    <h2 className="text-blue-gray font-bold text-xl">Hours Of Operation</h2>
                    <p>Nights: 6:00PM - 8:00AM</p>
                    <p>Weekends: Friday 6:00PM - Monday 8:00AM</p>
                    <p>Holidays: 24 Hours</p>
                </div>
            </section>
            <section className="max-w-2xl text-center mx-auto">
                
            </section>
        </div>
    )
}

export default Home
