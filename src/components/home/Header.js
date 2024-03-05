function Header(){
    return(
        <div class="lg:flex">
    <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Build Your New <span class="text-blue-600 dark:text-blue-400">Idea</span></h2>

            <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a href="#" class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                <a href="#" class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="mt-24 object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo"/>
        </div>
</div>

    )
}

export default Header