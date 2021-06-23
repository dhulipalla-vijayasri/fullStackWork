var productstore=[
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
    {
        image:"https://cdn.mos.cms.futurecdn.net/mYqKAn6RCL65SSs2U3muiE.jpg",
        title:"acer Aspire 7 Ryzen ",
        price:"₹51,990",
        description:"The Acer Aspire 7 is an elegant looking gaming laptop that comes with a powerful AMD Ryzen 5 quad-core 3550H processor and NVIDIA GTX series GPU that help it deliver a seamless and impressive performance.",
    
    },
]
var result = ""
result += `<div class="row">`
for (var pstore of Productstore) {
    result += `<div class="col-lg-4">`
    result += ` <div class="card">
                            <img src='${pstore.image}' class="img-card-img-top" />
                            <div class="card-body text-center">
                                <h6 class="card-title">${pstore.title}</h6>
                                <p class="card-text">
                                    $${pstore.price}
                                </p>
                            </div>
                </div>
                `
    result += "</div>"
}

result += "</div>"


//document.write(result)

//document.getElementById('productsData').innerHTML = result
//document.getElementsByClassName('productsData')[0].innerHTML = result
//document.getElementsByTagName('p')[0].innerHTML = result

//css_id_selector
//document.querySelector('#productsData').innerHTML = result

//css_class_selector
//document.querySelector('.productsData').innerHTML = result

//css_Single_selector
//document.querySelector('p').innerHTML = result


//css_tag with class_selector
document.querySelector('p.productsData').innerHTML = result
//document.querySelector('p.productsData').innerText = result