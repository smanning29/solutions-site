
console.log("js initiated");

// var main = document.getElementById('#mainArticle');
// var lArrow = document.getElementById('#l-arrow');
// var rArrow = document.getElementById('#r-arrow');



// function changeBgImage(){
//     console.log(solutionIndex);
//     solutionIndex++;
//     console.log(solutionIndex);
    
// }

new Vue({
    el: '#app',
    data: {
        bgImgs: [
            "url(img/s1-0.jpg)",
            "url(img/s2-0.jpg)",
            "url(img/s3-0.jpg)",
            "url(img/s4-0.jpg)",
            "url(img/s5-0.jpg)",
            "url(img/s6-0.jpg)",
            "url(img/s7-0.jpg)",
            "url(img/s8-0.jpg)",
            "url(img/s9-0.jpg)",
            "url(img/s10-0.jpg)",
            "url(img/s11-0.jpg)",
            "url(img/s12-0.jpg)",
            "url(img/s13-0.jpg)",
            "url(img/s14-0.jpg)",
            "url(img/s15-0.jpg)",
            "url(img/s16-0.jpg)",
            "url(img/s17-0.jpg)",
            "url(img/s18-0.jpg)",
            "url(img/s19-0.jpg)",
            "url(img/s20-0.jpg)"
                ],
        solNum: [
            "Solution #1 of 100",
            "Solution #2 of 100",
            "Solution #3 of 100",
            "Solution #4 of 100",
            "Solution #5 of 100",
            "Solution #6 of 100",
            "Solution #7 of 100",
            "Solution #8 of 100",
            "Solution #9 of 100",
            "Solution #10 of 100",
            "Solution #11 of 100",
            "Solution #12 of 100",
            "Solution #13 of 100",
            "Solution #14 of 100",
            "Solution #15 of 100",
            "Solution #16 of 100",
            "Solution #17 of 100",
            "Solution #18 of 100",
            "Solution #19 of 100",
            "Solution #20 of 100"
        ],
        solHeaders: [
            "Reduced Food Waste",
            "Health and Education",
            "Plant-Rich Diet",
            "Refrigerant Management",
            "Tropical Forest Restoration",
            "Onshore Wind Turbines",
            "Alternative Refrigerants",
            "Utility-Scale Solar Power",
            "Improved Clean Cookstoves",
            "Distributed Solar Photovoltaics",
            "Silvopasture",
            "Peatland Protection and Rewetting",
            "Tree Plantations",
            "Temperate Forest Restoration",
            "Concentrated Solar Power",
            "Insulation",
            "Managed Grazing",
            "LED Lighting",
            "Perennial Staple Crops",
            "Tree Intercropping"
        ],
        coNum: [
            "90.7–101.71",
            "85.42",
            "65.01-91.72",
            "57.75",
            "54.45–85.14",
            "47.21–147.72",
            "43.53–50.53",
            "42.32–119.13",
            "31.34–72.65",
            "27.98–68.64",
            "26.58–42.31",
            "26.03–41.93",
            "22.24–35.94",
            "19.42–27.85",
            "18.6–23.96",
            "16.97–19.01",
            "16.42–26.01",
            "16.07–17.53",
            "15.45–31.26",
            "15.03–24.4"
        ],
        solLink: [
            "https://www.drawdown.org/solutions/reduced-food-waste",
            "https://www.drawdown.org/solutions/health-and-education",
            "https://www.drawdown.org/solutions/plant-rich-diets",
            "https://www.drawdown.org/solutions/refrigerant-management",
            "https://www.drawdown.org/solutions/tropical-forest-restoration",
            "https://www.drawdown.org/solutions/onshore-wind-turbines",
            "https://www.drawdown.org/solutions/alternative-refrigerants",
            "https://www.drawdown.org/solutions/utility-scale-solar-photovoltaics",
            "https://www.drawdown.org/solutions/improved-clean-cookstoves",
            "https://www.drawdown.org/solutions/distributed-solar-photovoltaics",
            "https://www.drawdown.org/solutions/silvopasture",
            "https://www.drawdown.org/solutions/peatland-protection-and-rewetting",
            "https://www.drawdown.org/solutions/tree-plantations-on-degraded-land",
            "https://www.drawdown.org/solutions/temperate-forest-restoration",
            "https://www.drawdown.org/solutions/concentrated-solar-power",
            "https://www.drawdown.org/solutions/insulation",
            "https://www.drawdown.org/solutions/managed-grazing",
            "https://www.drawdown.org/solutions/led-lighting",
            "https://www.drawdown.org/solutions/perennial-staple-crops",
            "https://www.drawdown.org/solutions/tree-intercropping"
        ],
        keyWords: [
            `<div class="font-bold">wind turbines</div> Modern windmills, usually large and white
            <div class="font-bold pt-2">kinetic energy</div> Energy that comes from things in motion
            <div class="font-bold pt-2">wind farms</div>Large groups of wind turbines in one place to harvest lots of wind energy`,
            "no",
            "no",
            `<div class="font-bold">carbon sink</div> Forests, oceans, and other natural environments that can hold carbon by absorbing it out of the atmosphere.
            <div class="font-bold pt-2">pollinator</div> an animal or insect that moves pollen from plant to plant in order to fertilize the flowers
            <div class="font-bold pt-2">invasive plants</div> Plants that don’t belong in a certain ecosystem are called invasive plants. They can hurt an ecosystem because they disrupt the relationships between the native plants (plants that naturally grow in a place) and the animals that live there. When people remove invasive plants, tropical forests can grow strong.`,
            "no",
            `<div class="font-bold">methane</div> Methane is a greenhouse gas like carbon dioxide. One way it is created is when cows, and other animals, eat food, digest it, and then fart it out. Methane can trap 34 times more heat than carbon dioxide in earth’s atmosphere.
            <div class="font-bold pt-2">ecosystem</div> An ecosystem is a community of living organisms (such as plants, animals, and bacteria) along with the nonliving parts of their environments (such as air, water, sunlight, and soil).`,
            `<div class="font-bold">ecosystem</div> An ecosystem is a community of living organisms (such as plants, animals, and bacteria) along with the nonliving parts of their environments (such as air, water, sunlight, and soil).`,
            `<div class="font-bold">crops</div> Crops are plants that farmers grow for food. Examples are vegetables, grains (like wheat), and fruits.
            <div class="font-bold pt-2">erosion</div> Erosion is when soil and rocks are slowly moved from one area to another by wind and rain. `,
            `<div class="font-bold">pulp</div> Pulp is made when engineers cut plants into small pieces and then mash the pieces together with water. Water helps the pieces form a mushy mess called pulp. Many people use the bamboo pulp to make paper.
            <div class="font-bold pt-2">invasive species</div> An invasive species is a plant or animal that is not naturally live in that area. Sometimes invasive species multiple and spread out in new environments where they have not natural predators. The spread of invasive species can cause harm to local plants and animals.`,
            "no"
        ],
        firstPar: [
            //1-5
            "Globally, one third of all food does not make it from the farms and factories, where it is either grown or produced, to our plates. The process of making food that ever gets eaten wastes a LOT of valuable resources. For example, seeds, water, energy, land, fertilizer, people’s time working, and money is wasted. Wasted food makes up 8 percent of global greenhouse gas emissions every year!",
            "Climate change solutions are often located at the connection between people and the environment. Two examples of the important connections between people and the environment are high-quality reproductive healthcare and equal educational opportunities. Both of these issues are human rights and they are both very important to ensure that women and men are treated equally. When everyone has access to reproductive healthcare and equal educational opportunities, we are better prepared to address climate change.",
            `Focusing on eating fruits and vegetables as our main source of food can help keep us healthy and help prevent climate change. In many countries, including the United States, most people eat meat as their main course every meal and include fruits and vegetables as side courses. Eating meat as the main food source is becoming more common around the world. 
            However, eating so much meat contributes a lot to global warming. Meat production accounts for 20 percent of global greenhouse gas emissions. If all the cattle in the world lived together in their own country without humans, that country would place third for the largest producer of greenhouse gas in the world.`,
            `Refrigerators keep our food cold to make sure it stays fresh. Air conditioners keep buildings and homes cool during hot summers. Both refrigerators and air conditioners use chemicals that can absorb and give off heat to create cool air. These chemicals are called <span class="bg-sun25">refrigerants</span>. Up until 1987, two of the most common types of refrigerants were chlorofluorocarbons <span class="bg-sun25">(CFCs)</span> and hydro-chlorofluorocarbons <span class="bg-sun25">(HCFCs)</span>. Even though they are effective refrigerants, these chemicals cause a problem.`,
            `Tropical forests, like the Amazon rainforest and the Congo rainforest, used to cover 12 percent of land in the world. In the last few decades, they have been cut down for lumber for buildings, burnt down to make space for farming and ranching, and cleared so that cities can expand. This destruction not only hurts the trees. It also hurts the animals and other plants that live under and in the trees. Now tropical forests only cover 5 percent of land on Earth. 
            While tropical forest destruction continues in many places, there are also places where new tropical forests are growing. This happens naturally and when people plant trees. This is called <span class="bg-sun25">restoration</span>. New tropical forests capture a lot of carbon dioxide, up to six gigatons per year!`,
           //6-10
           `Wind energy is one of the most exciting solutions to climate change. Companies are building more <span class="bg-sun25">wind turbines</span> every year. Wind turbines are large wheels that rotate when the wind blows through them. As they rotate, wind turbines convert wind energy into electrical energy that people use in their homes and businesses. Today, there are 314,000 wind turbines around the world! They produce four percent of all electricity used.`,


            "In the 1800s, solar panels used to be made of selenium. This is a chemical that can spread heat when the sun shines on it. Today, we use something called PV (photovoltaic) panels. The PV (photovoltaic) panels are made of tiny silicon crystals. When the sun shines on the crystals, the heat absorbed creates an electric charge. This process doesn’t require any fuel, just sunlight and PV panels. Making energy with solar PV panels doesn’t release any greenhouse gases.",
            "In most modern farms, animals are kept on pastures, fields of grass, without trees. Silvopasture is an old and environmentally friendly way to raise cows and other farm animals that includes trees planted in pastures!",
            "Some animals, like bison and antelope, live in grassy places and eat many kinds of small plants. These grazing animals are extremely important to the environment. The way they eat and live helps create amazing places like the Serengeti plains in Africa and the tall grass prairies of the United States.",
            `Tree intercropping means planting trees in fields with  <span class="bg-sun25">crops</span>. This helps the soil hold more carbon and keep carbon dioxide out of the air where it can warm the Earth and cause climate change. It also helps crops grow by keeping the soil healthy. The way that farmers plant trees with crops changes based on the type of land, the climate, how much money farmers make on the crop, and the people planting the crop.`,
            "In the Philippines, there is a story about the first man and the first woman who ever lived. The first man’s name was Malakas, which means “Strong One.” The first woman was named Maganda, which means “Beautiful One.” In the story, the first man and the first woman came from the two halves of a bamboo tree. This story is one of many in Asia that tells about people coming from bamboo. These stories show how important bamboo is to people! Bamboo is a plant that humans have grown for more than a thousand different uses. It is used to build houses, as food, and even for paper.",
            "LED lights are light bulbs that are more environmentally friendly than conventional light bulbs (like incandescent or fluorescent light bulbs). Their name stands for ‘light emitting diodes’ (LED). Diodes are small electronic devices that conduct current in one direction. Sometimes they light up. Diodes were invented way back in 1874, but we couldn’t see the light that they were making very well. In 1994, more than 100 years later, Japanese scientists invented LED lights that were just as bright as conventional light bulbs. These scientists won the Nobel Prize in Physics in 2004 for their work with LEDs."
        ],
        firstSubH: [
            //1-5
            "Wasting food is an issue all around the world.",
            "How does the population relate to climate change?",
            "What can we do?",
            "How does reforestation absorb carbon from the air?",
            "The problems with refrigerants."
            //6-10
            "More wind energy for our electricity needs",
            "How do people use solar PV panels to make electricity?",
            "Why would we plant trees in pastures?",
            "Why are grazing animals important?",
            "Why is tree intercropping a good idea?",
            "What exactly is Bamboo?",
            "What are the differences between LEDs and conventional light bulbs?"
        ],
        secondPar: [
            //1-5
            "The process of moving food from where it is grown or made to where people buy it from grocery stores, is called a supply chain. In some places, food is usually wasted early in the supply chain process. For example, food rots on farms, or goes bad when it is stored or shipped to markets. In other places, food is wasted towards the end of the supply chain. For example, restaurants and customers shopping at grocery stores usually do not buy fruits and vegetables with bumps, bruises or strang coloring. Also, sometimes people buy too much food. The extra food goes bad and gets wasted.",
            "Today there are over 7.7 billion people living on Earth. That includes you! When we think about the future of people on our planet, the number of people who eat, go to school, drive cars, go to work, plug things in, buy things, and throw things away everyday matters. When more people live on our planet, we collectively use more resources. This is because when the population grows, factories need to produce more of the things we need and want. Things we need include beds, silverware, and clothing. Things we want maybe include toys, bikes, and videogames. When the population goes up, so does our global fossil fuel use.",
            `If people eat more fruits, vegetables, and beans, they can reduce greenhouse gas emissions. Many people think of vegetarian and vegan diets when they think of eating less meat, but those are not the only options. A plant-rich diet can look similar to a vegetarian diet, but also include meat that produces less greenhouse gas emissions, like chicken or fish. The main goal for any plant-rich diet is to center meals around plants instead of meat. Anyone can start eating more plants to lower their emissions.`,
           `If CFCs and HCFCs escape into the air, they can harm part of our atmosphere called the <span class="bg-sun25">ozone layer</span>. In 1987 many people came together to create a new international law called the <span class="bg-sun25">Montreal Protocol</span>. This law said that CFCs and HCFCs can no longer be used as refrigerants. 
           <br><br>When these chemicals were banned, scientists developed a new refrigerant called <span class="bg-sun25">hydrofluorocarbons (HFCs)</span>. HFCs are better for the ozone, but they are a very big issue for climate change. HFCs trap 1,000-9,000 times more heat than carbon dioxide! This means that even a small amount in the atmosphere can contribute a lot to global warming!`,
           `When forests begin to grow again, or restore themselves, the trees, roots, and leaves of plants absorb and hold carbon! When forests hold carbon, they become a  <span class="bg-sun25">carbon sink</span>. As the forest becomes healthy again, it is able to do the things tropical forests are meant to do. These thing are:<ul class="list-disc pl-4 py-2 pb-5"><li>Support the water cycle</li><li>Protect  <span class="bg-sun25">pollinators</span> & soil from erosion </li><li>Provide food and medicine for many people</li><li>Provide people with places to live, adventure, and worship</li></ul>`,
            //6-10
            `We will soon have access to more wind energy for our electricity needs because:<ul class="list-disc pl-4 py-2 pb-5"><li>Every year people build more turbines</li><li>The cost for wind energy is going down</li><li>In many places, wind energy is cheaper than energy made from burning coal and other fossil fuels</li><li>Once wind farms are built, they don’t need any fuel to run</li><li>Wind turbines continue to perform better as technology improves</li><li>Within 10 years, wind energy may be the cheapest energy available</li></ul>`,
            
            `There are two ways we use solar PV panels to make electricity. <ol class="list-decimal pl-4 py-2 pb-5"><li>Utility companies fill a large field with solar panels. This is called “utility-scale” solar. These provide energy for many homes and businesses. </li><li>Individual people install a few PV panels on rooftops or near homes and businesses. This is called “distributed” solar energy collection. This type of PV panel provides energy for the building they are attached to.</li></0l>
             In 2015, distributed solar made up 30 percent of all solar energy produced from PV panels. Germany is the leader in solar energy and has over 1.5 million distributed solar panels. In Bangladesh, a country next to India that has a population of over 157 million people, there are more than 3.6 million solar panels installed on or near homes.`,
            `Trees act as sponges that absorb carbon dioxide, which helps to offset the methane that cows and farm animals create. So, if we are going to raise farm animals it’s important to find ways to reduce the impact of the  <span class="bg-sun25">methane</span> they create. One way to do this is to trap carbon and reduce the overall amount of greenhouse gas emitted. Silvopasture allows the soil to absorb (take in) 5 to 10 times more carbon than pastures that have no trees. The carbon is sequestered, hidden away, in the trees and dirt. Ultimately, silvopasture also helps to keep the Earth cooler!`,
            `Grassy  <span class="bg-sun25">ecosystems</span> around the world sequester (trap and hide) a lot of carbon dioxide in their soil in the form of biomass. The health of the environment in grassy ecosystems is improved by wild grazing animals. These are herd animals, meaning they stand very close to one another to make sure no one gets hurt or lost. As they walk, they eat the tops of the grass. This way of eating actually helps the grass grow. As they move around the grassy ecosystem, wild grazing animals’ hooves also dig up the dirt a little bit and mix in their poop and pee. This mixing helps fertilize the soil! As a result, more grass grows and the extra grass traps atmospheric carbon in the soil - combatting one of the key components of climate change.`,
            `The benefits of tree intercropping include:<ul class="list-disc pl-4 py-2 pb-5"><li>Trees protect crops from getting damaged in extreme wind, rain, and sun</li><li>Trees help reduce  <span class="bg-sun25">erosion</span> that can harm the land</li><li>Trees have very long roots and they bring minerals and nutrients (like the vitamins you take) from deep in the soil up to where plants with shorter roots can find them</li><li>Trees create homes for different birds and insect pollinators that help crops grow</li></ul>`,
            'Bamboo is a grass, but when it is pressed down, it is as strong as concrete. When it is pulled or bent, it is as strong as steel. In just one growing season, bamboo grows to its full height! This means that farmers can cut down bamboo after just one year and use it for  <span class="bg-sun25">pulp</span> to make paper or farmers can let it grow for up to eight years. After bamboo is cut down, more bamboo sprouts in its place and grows.',
            `<ul class="list-disc pl-4 py-2 pb-5"><li>LEDs use 90% less energy than conventional light bulbs, but make the same amount of light.</li><li>Conventional light bulbs create light by heating special types of metal that glow when they get hot. This process of heating metal to make light wastes a lot of energy. In contrast, LEDs have a different process to make light and they do not give off much heat.</li><li>LEDs are not created with toxic chemicals. Some other light bulbs do contain toxic chemicals. For example, compact fluorescent lights (CFLs) have a small amount of mercury in them.</li><li>LED light bulbs last longer than other light bulbs.</li></ul>`,
        ],
        firstImg: [
            "img/s1-1.jpg",
            "img/s2-1.jpg",
            "img/s3-1.jpg",
            "img/s4-1.jpg",
            "img/s5-1.jpg",
            "img/s6-1.jpg",
            "img/s7-1.jpg",
            "img/s8-1.jpg",
            "img/s9-1.jpg",
            "img/s10-1.jpg",
            "img/s11-1.jpg",
            "img/s12-1.jpg",
            "img/s13-1.jpg",
            "img/s14-1.jpg",
            "img/s15-1.jpg",
            "img/s16-1.jpg",
            "img/s17-1.jpg",
            "img/s18-1.jpg",
            "img/s19-1.jpg",
            "img/s20-1.jpg"
                   ],
        firstImgCap: [
            `<div class="font-bold">Wind farm in a valley: </div>
            These wind turbines are spread across a large valley. The land underneath them can still be used for many things.`,
            `<div class="font-bold">Produce with imperfections: </div>
            This produce may look fine, but it would have been rejected by a normal groccery store's standards. This produce was sent through a special delivery service intended to reduce food waste.`,
            `<div class="font-bold">Plant-based burgers: </div>
            New plant-based burgers are being made to taste just like hamburgers. People may eat more plant-based foods when they look more like the meat-based foods they like.`,
            `<div class="font-bold">Tropical rainforest desforestation: </div>
            The best way to help rain forests is to stop deforestation. Unfortunately, lots of land is cleared for cattle grazing or other reasons. Sometimes they burn the land to clear it, which causes massive fires.`,
            `<div class="font-bold">Solar panels on a roof: </div>
            More and more homes are getting solar panels as they become less expensive to install. `,
            `<div class="font-bold">Silvopastoral Farm: </div>
            Cows grazing in fields that use silvopasture can rest in the shade of the trees. This can help the both the cows and the pasture recover.`,
            `<div class="font-bold">Herd of grazing animals: </div>
            Grazing animals travel in herds for safety, like this herd of buffalo in the Serengeti.`,
            `<div class="font-bold">Intercropped farm: </div>
            This woman shows her rubber plants and vegetables that she is growing together.`,
            `<div class="font-bold">Bamboo furniture: </div>
            Bamboo can be use for lots of things because it is very strong. This table and chairs is made from bamboo.`,
            `<div class="font-bold">Solar LED Lighting: </div>
            LED lights are very energy efficient, so they can be used with solar panels to bring light to places that do not have a power grid. This girl is fixing the solar powered light for her village in India.`,
            
        ],
        secondSubH: [
            "Wind farms",
            "What can we do to waste less food?",
            "What makes it hard to switch to a plant-based diet?",
            "How can people help restore tropical forests?",
            "Is it expensive to install solar panels on rooftop?",
            "Why is silvopasture a good idea?",
            "Benefits of managed grazing on farms",
            "What can tree intercropping look like?",
            "How is bamboo helpful against global warming?",
            "Why doesn’t every household use LEDs?",
        ],
        thirdPar: [
            'Usually, engineers build several wind turbines near each other. These areas of land are called  <span class="bg-sun25">wind farms</span>. Wind farms do not completely cover the land they are built on. In fact, wind turbines only take up a tiny bit of land! We can use the rest of the land on wind farms for grazing farm animals, planting crops, hiking and biking, or we can just protect the land for wildlife. One other important thing about wind farms is that they can be built in less than one year. As a result, wind farms start generating energy and money quickly.',
            `The good thing is there are many ways to fix the problem of food waste! To reduce food waste early in the supply chain, low income countries need tools and technology to: <ul class="list-disc pl-4 py-2 pb-5"><li>Store food so it does not go bad</li><li>Move the food more quickly from farms and factories to stores</li><li>Process food to keep it fresh</li></ul> To reduce food later in the supply chain, high income countries can: <ul class="list-disc pl-4 py-2"><li>Set community and state goals for reducing waste</li><li>Help people understand how much food they actually need so they do not buy too much and waste it</li><li>Change negative attitudes about bruised fruits or vegetables with bumps on them</li></ul>`,
           'What people eat is connected to where they grew up, what they value, and what they were taught to eat as kids. This can make choosing a plant-based diet difficult. But more tasty plant-based foods, such as Beyond Burgers, are becoming available. So, it’s getting easier to not eat meat. Another problem is that many governments help ranchers pay for raising cows. As a result, meat is very inexpensive. If this policy changed and the price of meat went up to its true cost, more people might choose a plant-based diet. As Zen master Thich Nhat Hanh has said, "making the transition to a plant-based diet may be the most effective way an individual can stop climate change."',
           `People now farm on land that was tropical forest. People have turned some valleys that were tropical forest into lakes to store water. There are a few ways people can support the restoration of tropical forests. <ol class="list-decimal pl-4 py-2 pb-5"><li>People can restore tropical forests by letting forests grow back on land that is being used for farming and lakes.</li><li>As forests begin to grow back, people can protect them from fires, erosion, and animals.</li><li>People can plant baby trees where adult trees used to grow.</li><li>People can remove  <span class="bg-sun25">invasive plants</span> that don’t belong in tropical forests. </li></ol>Most tropical forests have communities of people who live nearby. It is important to include local communities who live near tropical forests in efforts to restore these forests!`,
           `Each year, more people use solar panels. This is because they are getting less expensive. The price is going down because we are getting better at making them and some governments help pay to build them. There are also programs that help people get solar energy by buying panels renting them to their customers. Unfortunately, the cost to install PV panels is still high. <br><br> In places where most homes and businesses are connected to power lines, solar panels help people disconnect from the power line system and control their own electricity. In places where there are no electric utilities or power lines, solar panels can help people access electricity. Solar PV panels do not require big companies or fossil fuels. By providing a way for people to access electricity on their own, solar PV panels can help eliminate poverty.`,
           `<ul class="list-disc pl-4 py-2 pb-5"><li>Farmers can plant fruit or nut trees in pastures and allow mushrooms to grow. Farmers can then sell the fruit, nuts or mushrooms to make extra money.</li><li>Cows and other farm animals wear down the grass in pastures. They do this when they eat and walk on the grass all day, everyday. By having more living things on pastures, like trees, the farm  <span class="bg-sun25">ecosystem</span> will be healthier and the land will be stronger.</li><li>Silvopasture can help farmers and their animals adjust to different weather patterns and the more frequent droughts that will be a result of climate change.</li></ul>`,
           "Many grassy areas are now filled with domestic animals, like sheep and cows. They act differently than the wild grazing animals because they are fenced in. Since they live in only a small fenced area, they sometimes eat more grass than the land can grow. This isn’t good for the land and means that the soil does not sequester as much carbon. To keep the grass healthy and to keep carbon in the soil, farmers can use managed grazing. Managed grazing imitates the way wild grazing animals move around the land. With managed grazing, domestic animals move from field to field so they never eat all the grass in one area. <br><br> Managed grazing is good for every part of the farm animal ecosystem. It allows the soil to hold more water so plants are healthy. It helps animals find grass so they stay healthy and grow quickly. And it helps sequester more carbon in the soil - 0.5 to 3 tons of carbon for every acre of land (about one football field)! Even though managed grazing helps sequester more carbon in the soil, this method does not reduce the amount of methane emissions grazing animals release into the atmosphere as part of their digestion (when they fart!).",
           `Trees and crops can be combined in many different ways. There are two main ways:<ul class="list-disc pl-4 py-2 pb-5"><li> <span class="font-bold">Alley cropping</span> is when trees are planted in rows with crops in between them. This method helps trees fertilize crops.</li><li> <span class="font-bold">Parkland systems</span> are when trees are scattered throughout fields with crops. There are many other ways to combine trees and crops and most of them make fields beautiful.</li></ul>
           Some combinations of crops and trees include: chili pepper plants and coffee trees, marigolds and coconut trees, walnut trees and corn, citrus trees and eggplant, olive trees and barley, teak trees and taro, and oak trees and lavender. There are endless possible combinations of trees and crops! <br><br> As machines replaced people working in crop fields over the past 100 years, the mixing of crops and trees became much less common. Farmers are now realizing the importance of tree intercropping. It can help us grow healthy food, take care of the land, and address global warming at the same time.`,
           'Bamboo can also be used to help against global warming! It does this by taking carbon dioxide out of the air and storing it in the plant’s stem, leaves, and roots. This is called carbon sequestration. Bamboo can take carbon dioxide out of the air faster than almost every other plant on Earth! Bamboo also has a superpower - it can live in many types of soil where other plants can’t survive. It can even live in soil that does not have many nutrients. <br><br> We need to be careful where we plant bamboo. Just because bamboo can live in many places around the world, does not mean it should. In areas where bamboo does not grow naturally, it is known as an  <span class="bg-sun25">invasive species</span>. This means that if people do not look after it carefully, bamboo can grow out of control and hurt plants and animals that live in the area. It is important for humansto manage bamboo after it is planted so that it grows in safe ways that also help the environment.',
           "LED light bulbs cost two or three times more than conventional light bulbs. The higher price makes it hard for some people to switch to LEDs in their homes.The good news is that LEDs are becoming less expensive! Also, since LEDs last a lot longer than conventional light bulbs, people will save money in the long term because they do not have to buy light bulbs as often. <br><br> More than a billion people in the world live without electricity. For them, solar LED lights are a great option. These lights don’t need to be plugged into the wall. They only need the sun to power them! Solar powered LED lights can replace expensive oil lamps. They are also a better option than oil lamps because LED lights don’t release unhealthy, toxic fumes."
        ],
        secondImg: [
            "img/s1-2.jpg",
            "img/s2-2.jpg",
            "img/s3-2.jpg",
            "img/s4-2.jpg",
            "img/s5-2.jpg",
            "img/s6-2.jpg",
            "img/s7-2.jpg",
            "img/s8-2.jpg",
            "img/s9-2.jpg",
            "img/s10-2.jpg",
            "img/s11-2.jpg",
            "img/s12-2.jpg",
            "img/s13-2.jpg",
            "img/s14-2.jpg",
            "img/s15-2.jpg",
            "img/s16-2.jpg",
            "img/s17-2.jpg",
            "img/s18-2.jpg",
            "img/s19-2.jpg",
            "img/s20-2.jpg"
                   ],
        solutionIndex: 0
    },
    methods: {
        right: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex++;
            if(this.solutionIndex == 20){
                this.solutionIndex = 0;
            } 
        },
        left: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex--;
            if(this.solutionIndex == -1){
                this.solutionIndex = 19;
            } 
        }
    }
  })
  