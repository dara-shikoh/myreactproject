import Services from './services.jsx';
import data from './data.jsx';
const Servicemap=()=>{
    return(
        <>
        {data.map((val) => {
          return (
            <Services image={val.image}
              heading={val.heading}
              para={val.story}
              />
              )
            })}
            <div className='different_service'>
          <h2 className='different'>Services</h2>
        </div>
        <br />

        </>
    )

}

export default Servicemap;