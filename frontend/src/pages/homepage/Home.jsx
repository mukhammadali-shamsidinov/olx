import React from 'react'
import Search from '../../components/Search'
import IconSearch from '../../components/IconSearch'
import Card from '../../components/Card'

function Home() {
  return (
    <div>
         <div className="container mx-auto mt-5 p-3">
            <div className="row">
                <div className="col-12">
                    <Search />
                </div>
                <div className="col-12">
                   <IconSearch />
                </div>
                <div className="col-12">
                   <Card />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home