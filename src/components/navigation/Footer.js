import { connect } from "react-redux"

function Footer(){
    return(
        <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div class="md:max-w-md lg:col-span-2">
                    <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
                        <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                        <rect x="3" y="1" width="7" height="12"></rect>
                        <rect x="3" y="17" width="7" height="6"></rect>
                        <rect x="14" y="1" width="7" height="6"></rect>
                        <rect x="14" y="11" width="7" height="12"></rect>
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Clear IT</span>
                    </a>
                    <div class="mt-4 lg:max-w-sm">
                        <p class="text-sm text-gray-800">
                        Somos una agencia especializada en el diseño y desarrollo de sitios web a medida. Ofrecemos soluciones digitales personalizadas que reflejen la esencia de tu marca. 
                        
                        </p>
                        <p class="mt-4 text-sm text-gray-800">
                        Confía en nosotros para llevar tu presencia en línea al siguiente nivel.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p class="font-semibold tracking-wide text-gray-800">Categorías</p>
                        <ul class="mt-2 space-y-2">
                        <li>
                            <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Noticias</a>
                        </li>
                        <li>
                            <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">World</a>
                        </li>
                        <li>
                            <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Games</a>
                        </li>
                        <li>
                            <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">References</a>
                        </li>
                        </ul>
                    </div>
                <div>
                    <p class="font-semibold tracking-wide text-gray-800">Business</p>
                    <ul class="mt-2 space-y-2">
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Web</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">eCommerce</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Business</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Entertainment</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Portfolio</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <p class="font-semibold tracking-wide text-gray-800">Apples</p>
                    <ul class="mt-2 space-y-2">
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Media</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Brochure</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Nonprofit</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Educational</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Projects</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <p class="font-semibold tracking-wide text-gray-800">Cherry</p>
                    <ul class="mt-2 space-y-2">
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Infopreneur</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Personal</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Wiki</a>
                    </li>
                    <li>
                        <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Forum</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                <p class="text-sm text-gray-600">
                © Copyright 2020 Lorem Inc. All rights reserved.
                </p>
                <div class="flex items-center mt-4 space-x-4 sm:mt-0">
                
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                    <circle cx="15" cy="15" r="4"></circle>
                    <path
                        d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                    ></path>
                    </svg>
                </a>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                    </svg>
                </a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps,{

}) (Footer)