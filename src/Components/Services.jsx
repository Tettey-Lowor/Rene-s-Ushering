import React from 'react'

export default function Services() {
    
  return (
    <section class="py-10 mb-4" id="services">
    <div class="container mx-auto px-4 ">
        <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://nyomplanet.com/blogImages/featured/Looking%20For%20Ushers%20For%20Your%20Ugandan%20Wedding.jpg" alt="event"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Weddings</h3>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam inventore quisquam necessitatibus cumque dolores, libero odit voluptas reprehenderit quas sapiente assumenda cum natus sed ratione quaerat soluta. Quasi, nulla!</p>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://iowastartingline.com/wp-content/uploads/sites/4/2024/05/shutterstock_1323618038-750x430-1.jpg" alt="event"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Birthdays</h3>
                    <p class="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel, quisquam, nemo hic distinctio, labore consequuntur a voluptatibus odio quis ex atque accusamus quibusdam sapiente natus repellat ipsam vero rem..</p>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://weddingsonbudget.biz/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-04-at-09.04.12-1.jpeg" alt="event"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Naming Ceremony</h3>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque modi vel id ratione incidunt mollitia debitis facere, dolor officia repudiandae dignissimos quis possimus dolorum optio inventore eum? Molestiae, velit natus!.
                    <details>
                        <summary>Read More</summary>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, pariatur  voluptates facilis magnam numquam iste..</p>
                    </details>
                    </p>

                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://cdn.shopify.com/s/files/1/0765/2137/3999/articles/how-to-plan-a-graduation-party.jpg?v=1686271444" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Graduation Ceremonies</h3>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas expedita ipsa excepturi maiores omnis voluptates aliquid reiciendis corrupti quaerat soluta libero temporibus, at culpa, nulla quam reprehenderit quos cupiditate distinctio!.
                    <details>
                        <summary>Read More</summary>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing  dolorem magnam nam accusamus placeat ullam eligendi?.</p>
                    </details>
                    </p>
                </div>
            </div>
            {/* <!-- special card --> */}
            <div
                class="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                <div class="text-center text-white font-medium">Special Offer</div>
                <img src="https://www.munichre-foundation.org/content/dam/munichre/foundation/pictures/inclusive-insurance/2023-icii/ICII2023SummaryTeaser.jpg/_jcr_content/renditions/original./ICII2023SummaryTeaser.jpg" alt="Conferences"
                    class="w-full h-64 object-cover rounded-t-lg"/>
                <div class="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Conferences</h3>
                    <p class="text-gray-700 text-base"> <span class="font-medium underline">Our speciality is</span>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga impedit eos labore quam dolorum necessitatibus ipsa, aliquam quia ipsum commodi optio perspiciatis sapiente atque sint perferendis ea corrupti eius.
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://www.sentinel-gcrf.org/sites/sentinel/files/images/2019-02/Ghana-NLA-and-Sentinel-seated.png" alt="meetings"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Meetings</h3>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere similique, beatae doloribus tempora ullam praesentium porro molestiae sed reprehenderit aliquam architecto neque debitis nobis fugit eos exercitationem eligendi illo?
                    <details>
                        <summary>Read More</summary>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing voluptatem ratione culpa id nesciunt!.</p>
                    </details>
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}
