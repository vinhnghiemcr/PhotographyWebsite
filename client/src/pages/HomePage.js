
import Service from "../components/Service"

const HomePage = ({ services }) => {
console.log(services, "SERRRRRRRRRRRRRRR");

    
    return (
        <div>
            {
            services.map((service) => 
            <Service key={service._id} id={service._id}
                name={service.name} 
                description={service.description}
                packages={service.packages}
                pictures={service.pictures}
                />
            )}
        </div>
    )
}
export default HomePage