
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
        bgImgs: ["url(img/s1-0.jpg)","url(img/s2-0.jpg)","url(img/s3-0.jpg)","url(img/s4-0.jpg)","url(img/s5-0.jpg)","url(img/s6-0.jpg)","url(img/s7-0.jpg)","url(img/s8-0.jpg)","url(img/s9-0.jpg)","url(img/s10-0.jpg)","url(img/s11-0.jpg)","url(img/s12-0.jpg)","url(img/s13-0.jpg)","url(img/s14-0.jpg)","url(img/s15-0.jpg)","url(img/s16-0.jpg)","url(img/s17-0.jpg)","url(img/s18-0.jpg)","url(img/s19-0.jpg)","url(img/s20-0.jpg)"],
        solNum: ["Solution #1 of 100","Solution #2 of 100","Solution #3 of 100","Solution #4 of 100","Solution #5 of 100","Solution #6 of 100","Solution #7 of 100","Solution #8 of 100","Solution #9 of 100","Solution #10 of 100","Solution #11 of 100","Solution #12 of 100","Solution #13 of 100","Solution #14 of 100","Solution #15 of 100","Solution #16 of 100","Solution #17 of 100","Solution #18 of 100","Solution #19 of 100","Solution #20 of 100"],
        solHeaders: [
            //1-5
            "Reduced Food Waste",
            "Health and Education",
            "Plant-Rich Diet",
            "Refrigerant Management",
            "Tropical Forest Restoration",
            //6-10
            "Onshore Wind Turbines",
            "Alternative Refrigerants",
            "Utility-Scale Solar Power",
            "Improved Clean Cookstoves",
            "Distributed Solar Photovoltaics",
            //11-15
            "Silvopasture",
            "Peatland Protection and Rewetting",
            "Tree Plantations",
            "Temperate Forest Restoration",
            "Concentrated Solar Power",
            //16-20
            "Insulation",
            "Managed Grazing",
            "LED Lighting",
            "Perennial Staple Crops",
            "Tree Intercropping"
        ],
        coNum: [
            //1-5
            "90.7–101.71","85.42","65.01-91.72","57.75","54.45–85.14",
            //6-10
            "47.21–147.72","43.53–50.53","42.32–119.13","31.34–72.65","27.98–68.64",
            //11-15
            "26.58–42.31","26.03–41.93","22.24–35.94","19.42–27.85","18.6–23.96",
            //16-20
            "16.97–19.01","16.42–26.01","16.07–17.53","15.45–31.26","15.03–24.4"
        ],
        solLink: [
            //1-5
            "https://www.drawdown.org/solutions/reduced-food-waste",
            "https://www.drawdown.org/solutions/health-and-education",
            "https://www.drawdown.org/solutions/plant-rich-diets",
            "https://www.drawdown.org/solutions/refrigerant-management",
            "https://www.drawdown.org/solutions/tropical-forest-restoration",
            //6-10
            "https://www.drawdown.org/solutions/onshore-wind-turbines",
            "https://www.drawdown.org/solutions/alternative-refrigerants",
            "https://www.drawdown.org/solutions/utility-scale-solar-photovoltaics",
            "https://www.drawdown.org/solutions/improved-clean-cookstoves",
            "https://www.drawdown.org/solutions/distributed-solar-photovoltaics",
            //11-15
            "https://www.drawdown.org/solutions/silvopasture",
            "https://www.drawdown.org/solutions/peatland-protection-and-rewetting",
            "https://www.drawdown.org/solutions/tree-plantations-on-degraded-land",
            "https://www.drawdown.org/solutions/temperate-forest-restoration",
            "https://www.drawdown.org/solutions/concentrated-solar-power",
            //16-20
            "https://www.drawdown.org/solutions/insulation",
            "https://www.drawdown.org/solutions/managed-grazing",
            "https://www.drawdown.org/solutions/led-lighting",
            "https://www.drawdown.org/solutions/perennial-staple-crops",
            "https://www.drawdown.org/solutions/tree-intercropping"
        ],
        solPDF: [
            //1-5
            "","","","",""
        ],
        keyWords: [
            //1-5
            "no",
            `<div class="font-bold">reproductive healthcare</div>This means that people can have a healthy reproductive system and they have the ability to reproduce and have a family when they choose to.
            <div class="font-bold pt-2">equal educational opportunities</div> An education that is equitable and accessible to all genders and that prepares all students to be decision-makers and knowledge-producers.`,
            "no",
            `<div class="font-bold">ozone layer</div> The ozone layer is a layer of Earth’s atmosphere that absorbs most of the ultraviolet (UV) energy reaching Earth from the sun.`,
            `<div class="font-bold pt-2">pollinator</div> an animal or insect that moves pollen from plant to plant in order to fertilize the flowers
            <div class="font-bold">erosion</div> Erosion is when soil and rocks are slowly moved from one area to another by wind and rain. 
            <div class="font-bold pt-2">invasive plants</div> Plants that don’t belong in a certain ecosystem are called invasive plants. They can hurt an ecosystem because they disrupt the relationships between the native plants (plants that naturally grow in a place) and the animals that live there. When people remove invasive plants, tropical forests can grow strong.`,
            //6-10
            `<div class="font-bold">graze</div> Graze means eat grass in a field. Many cows graze in open fields.
            <div class="font-bold pt-2">conserve</div> Conserve means to protect from harm or destruction. When we conserve the environment, we protect it from being destroyed by human activity, like farming or building homes.`,
            `<div class="font-bold">ozone layer</div> The ozone layer is a layer of Earth’s atmosphere that absorbs most of the ultraviolet (UV) energy reaching Earth from the sun.
            <div class="font-bold pt-2">Montreal Protocol</div> Learn more about this in the Refrigerant Management solution.`,
            `<div class="font-bold">watt</div> A watt is a way to measure power, or the speed of energy transfer of appliances. For example, many lightbulbs in homes are 60 watts. That means they will change 60 joules of electrical energy into light energy every second.`,
            `<div class="font-bold">carbon monoxide</div> In many buildings and homes in the U.S., carbon monoxide alarms are placed on the walls. There are probably a few in your school, or your home. Carbon monoxide is toxic to breathe, which is why so many of these alarms are installed.
            <div class="font-bold pt-2">black carbon</div> This is created when certain things are burned. It forms a powdery black dust called soot. It also is very bad for human health. `,
            "no",
            //11-15
            `<div class="font-bold">ecosystem</div> An ecosystem is a community of living organisms (such as plants, animals, and bacteria) along with the nonliving parts of their environments (such as air, water, sunlight, and soil).`,
            `<div class="font-bold">decompose</div> Decomposition is when formerly living things (plants and animals) are broken down into their component parts, such as carbon dioxide, water, salts and simple sugars.`,
            `<div class="font-bold">perennial plants</div> Perennials are plants that live more than two years. Technically trees and shrubs are perennials, but trees and shrubs have woody branches whereas perennial plants do not. Examples of perennials are lilies, lavender, and daisies.
            <div class="font-bold pt-2">biodiversity</div> Biodiversity means that lots of different kinds of plants and animals live together in an area.`,
            "no",
            `<div class="font-bold">turbine</div> A turbine is a machine with a wheel or rotor with vanes. When the turbine spins, it creates electricity.
            <div class="font-bold pt-2">reliable</div> Reliable means that the quality is consistent over time. CSP plants can be trusted to make the same amount of electricity each day.`,
           //16-20
            `<div class="font-bold">insulation</div>Insulation in homes and buildings is a material that builders use to stop heat from escaping or entering the building.`,
            `<div class="font-bold">ecosystem</div> An ecosystem is a community of living organisms (such as plants, animals, and bacteria) along with the nonliving parts of their environments (such as air, water, sunlight, and soil).`,
            "no",
            `<div class="font-bold">erosion</div> Erosion is when soil and rocks are slowly moved from one area to another by wind and rain.`,
            `<div class="font-bold">crops</div> Crops are plants that farmers grow for food. Examples are vegetables, grains (like wheat), and fruits.
            <div class="font-bold pt-2">erosion</div> Erosion is when soil and rocks are slowly moved from one area to another by wind and rain. `
        ],
        firstPar: [
            //1-5
            "Globally, one third of all food does not make it from the farms and factories, where it is either grown or produced, to our plates. The process of making food that ever gets eaten wastes a LOT of valuable resources. For example, seeds, water, energy, land, fertilizer, people’s time working, and money is wasted. Wasted food makes up 8 percent of global greenhouse gas emissions every year!",
            `Climate change solutions are often located at the connection between people and the environment. Two examples of the important connections between people and the environment are <span class="bg-sun25">high-quality reproductive healthcare</span> and <span class="bg-sun25">equal educational opportunities</span>. Both of these issues are human rights and they are both very important to ensure that women and men are treated equally. When everyone has access to reproductive healthcare and equal educational opportunities, we are better prepared to address climate change.`,
            `Focusing on eating fruits and vegetables as our main source of food can help keep us healthy and help prevent climate change. In many countries, including the United States, most people eat meat as their main course every meal and include fruits and vegetables as side courses. Eating meat as the main food source is becoming more common around the world. 
                However, eating so much meat contributes a lot to global warming. Meat production accounts for 20 percent of global greenhouse gas emissions. If all the cattle in the world lived together in their own country without humans, that country would place third for the largest producer of greenhouse gas in the world.`,
            `Refrigerators keep our food cold to make sure it stays fresh. Air conditioners keep buildings and homes cool during hot summers. Both refrigerators and air conditioners use chemicals that can absorb and give off heat to create cool air. These chemicals are called <span class="bg-sun25">refrigerants</span>. Up until 1987, two of the most common types of refrigerants were chlorofluorocarbons <span class="bg-sun25">(CFCs)</span> and hydro-chlorofluorocarbons <span class="bg-sun25">(HCFCs)</span>. Even though they are effective refrigerants, these chemicals cause a problem.`,
            `Tropical forests, like the Amazon rainforest and the Congo rainforest, used to cover 12 percent of land in the world. In the last few decades, they have been cut down for lumber for buildings, burnt down to make space for farming and ranching, and cleared so that cities can expand. This destruction not only hurts the trees. It also hurts the animals and other plants that live under and in the trees. Now tropical forests only cover 5 percent of land on Earth. 
                While tropical forest destruction continues in many places, there are also places where new tropical forests are growing. This happens naturally and when people plant trees. This is called <span class="bg-sun25">restoration</span>. New tropical forests capture a lot of carbon dioxide, up to six gigatons per year!`,
           //6-10
           `Wind energy is one of the most exciting solutions to climate change. Companies are building more <span class="bg-sun25">wind turbines</span> every year. Wind turbines are large wheels that rotate when the wind blows through them. As they rotate, wind turbines convert wind energy into electrical energy that people use in their homes and businesses. Today, there are 314,000 wind turbines around the world! They produce four percent of all electricity used.`,
           `Refrigerators keep our food cold to make sure it stays fresh. Air conditioners keep buildings and homes cool during hot summers. Both refrigerators and air conditioners use chemicals that can absorb and give off heat to create cool air. These chemicals are called <span class="bg-sun25">refrigerants</span>. Up until 1987, two of the most common types of refrigerants were chlorofluorocarbons <span class="bg-sun25">(CFCs)</span> and hydro-chlorofluorocarbons <span class="bg-sun25">(HCFCs)</span>. Even though they are effective refrigerants, these chemicals cause a problem.`,
            "The sun provides an unlimited source of energy, called solar energy. The awesome thing about solar energy is that it has a low impact on our environment! We use solar panels in order to collect the energy from the sun and convert it into electrical energy so we can power the lights, heat, and appliances in our homes and buildings. Have you seen solar panels on top of houses or buildings in your community? Maybe you’ve even seen a huge solar farm like the one in the picture below. These large farms are an example of utility-scale photovoltaics.",
            "Around the world people cook in many different ways. In the United States, you may be used to seeing your family cook dinners on a gas or electric stove or in the microwave. However, about 3 billion people in the world cook their meals on open fires or on very basic stoves.",
            `In the 1800s, solar panels used to be made of selenium. This is a chemical that can spread heat when the sun shines on it. Today, we use something called <span class="bg-sun25">PV (photovoltaic) panels</span>. The PV (photovoltaic) panels are made of tiny silicon crystals. When the sun shines on the crystals, the heat absorbed creates an electric charge. This process doesn’t require any fuel, just sunlight and PV panels. Making energy with solar PV panels doesn’t release any greenhouse gases.`,
            //11-15
            `In most modern farms, animals are kept on pastures, fields of grass, without trees. <span class="bg-sun25">Silvopasture</span> is an old and environmentally friendly way to raise cows and other farm animals that includes trees planted in pastures!`,
            `<span class="bg-sun25">Peatlands</span> are one of the most important types of wetlands in the world. They are also sometimes called <span class="bg-sun25">bogs</span> or <span class="bg-sun25">mires</span>.  Peat is made out of dead or <span class="bg-sun25">decomposing</span> plants from hundreds and thousands of years ago. It is formed when dead plants that grew in the peatland areas begin to decompose under a layer of living vegetation and water. The decomposition process never finishes because the water stops the decomposition. Over the years, peat becomes thick and forms a very wet and dense soil. Water-loving plants grow on top of it.`,
            `<span class="bg-sun25">Afforestation</span> is the process of planting trees to create forests in places where there were not forests before. Land that has been used in the past for farming, animal grazing, and even mining can be great places for new trees and <span class="bg-sun25">perennial plants</span> to grow.`,
            `Temperate zones are places on Earth that are located about midway between the equator and the North and South Poles. About 25% of all trees on Earth are found in temperate zones, mostly in the Northern Hemisphere. Some of those trees are deciduous, which grow and lose their leaves every year. Other trees are evergreen, with needles that stay green all year round. Throughout human history, 99 percent of temperate forests have been used or changed by humans in some way. Many forests have been used to create wood for construction, while others have been cut down to create space for farming and cities. 
                Even though temperate forests have faced many challenges and pressures, they are very strong. They are able to recover from impacts over time, and can eventually regenerate ecosystems that used to exist many years ago.`,
            "Concentrated solar power (CSP) has been around since the 1980s. It is becoming more and more popular.",
            //16-20
            "It can be really uncomfortable when you feel too warm, or too cold. This is why it’s nice to have heating and cooling systems in offices, restaurants, schools, and homes. But, about 25 to 60 percent of energy that is used for heating and cooling buildings is lost.",
            `Some animals, like bison and antelope, live in grassy places and eat many kinds of small plants. These <span class="bg-sun25">grazing animals</span> are extremely important to the environment. The way they eat and live helps create amazing places like the Serengeti plains in Africa and the tall grass prairies of the United States.`,
            `LED lights are light bulbs that are more environmentally friendly than conventional light bulbs (like incandescent or fluorescent light bulbs). Their name stands for ‘light emitting diodes’ (LED). <span class="bg-sun25">Diodes</span> are small electronic devices that conduct current in one direction. Sometimes they light up. 
                Diodes were invented way back in 1874, but we couldn’t see the light that they were making very well. In 1994, more than 100 years later, Japanese scientists invented LED lights that were just as bright as conventional light bulbs. These scientists won the Nobel Prize in Physics in 2004 for their work with LEDs.`,
            `The majority of crops we use for food, like corn, are <span class="bg-sun25">annual plants</span>. That means that every year we have to plant new seeds for the crops to grow. Other plants, like trees, are known as <span class="bg-sun25">perennials</span>. People do not need to replant them each year. Every year they continue to grow and get bigger. 
                Perennial crops we grow for food include coconuts, bananas, avocados, and many kinds of nuts. The trees that produce these foods also pull much more carbon out of the air and store more in the soil compared to annual plants.`,
            `<span class="bg-sun25">Tree intercropping</span> means planting trees in fields with  <span class="bg-sun25">crops</span>. This helps the soil hold more carbon and keep carbon dioxide out of the air where it can warm the Earth and cause climate change. It also helps crops grow by keeping the soil healthy. The way that farmers plant trees with crops changes based on the type of land, the climate, how much money farmers make on the crop, and the people planting the crop.`
        ],
        firstSubH: [
            //1-5
            "Wasting food is an issue all around the world.",
            "How does the population relate to climate change?",
            "What can we do?",
            "The problems with refrigerants",
            "How does reforestation absorb carbon from the air?",
            //6-10
            "More wind energy for our electricity needs",
            "The problems with refrigerants",
            "Solar Farms",
            "The problems with open fire cooking",
            "How do people use solar PV panels to make electricity?",
            //11-15
            "Why would we plant trees in pastures?",
            "Where in the world are peatlands and what do they look like?",
            "How does afforestation happen?",
            "Why is it important to restore temperate forests?",
            "How do concentrated solar power plants make electricity?",
            //16-20
            "So, where does all that energy go?",
            "Why are grazing animals important?",
            "What are the differences between LEDs and conventional light bulbs?",
            "Why are perennial staple crops important?",
            "Why is tree intercropping a good idea?"
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
            `If CFCs and HCFCs escape into the air, they can harm part of our atmosphere called the <span class="bg-sun25">ozone layer</span>. In 1987 many people came together to create a new international law called the <span class="bg-sun25">Montreal Protocol</span>. This law said that CFCs and HCFCs can no longer be used as refrigerants. 
                <br><br>When these chemicals were banned, scientists developed a new refrigerant called <span class="bg-sun25">hydrofluorocarbons (HFCs)</span>. HFCs are better for the ozone, but they are a very big issue for climate change. HFCs trap 1,000-9,000 times more heat than carbon dioxide! This means that even a small amount in the atmosphere can contribute a lot to global warming!`,
            `A solar farm is a good way to harness a lot of the sun’s energy. Solar farms are located on large pieces of land where many, sometimes millions, of <span class="bg-sun25">photovoltaic (PV)</span> panels, all work together. Another more common name for photovoltaic panels is solar panels. Solar farms act as power plants because they produce just as much electricity as power plants that use fossil fuels. Solar farms send energy out to homes, schools, offices, and stores like other power plants. 
                <br><br>What’s the difference between power plants that use fossil fuels and solar farms? The difference is that solar farms don’t release greenhouse gas emissions like fossil fuel powered power plants! This means that they don’t produce greenhouse gases when they make energy.`,
            `Open flames or simple stoves often use sources of fuel that pollute the air. While most people in the United States cook with gas or electricity, many people cook with these materials:<ul class="list-disc pl-4 py-2 pb-5"><li>Wood</li><li>Charcoal</li><li>Dried animal poop (usually from grazing animals like cows)</li><li>Parts of plants leftover from harvesting crops</li><li>Coal</li></ul>
                When things like wood and dried animal poop are burned, a lot of smoke and soot is released. When people use open fires and simple stoves inside, this smoke and soot stays inside of people’s homes and it is very unhealthy to breathe. Sadly, cooking in this way leads to an early death for more than 4 million people every year.`,
            `There are two ways we use solar PV panels to make electricity. <ol class="list-decimal pl-4 py-2 pb-5"><li>Utility companies fill a large field with solar panels. This is called “utility-scale” solar. These provide energy for many homes and businesses. </li><li>Individual people install a few PV panels on rooftops or near homes and businesses. This is called “distributed” solar energy collection. This type of PV panel provides energy for the building they are attached to.</li></0l>
                In 2015, distributed solar made up 30 percent of all solar energy produced from PV panels. Germany is the leader in solar energy and has over 1.5 million distributed solar panels. In Bangladesh, a country next to India that has a population of over 157 million people, there are more than 3.6 million solar panels installed on or near homes.`,
            //11-15
            `Trees act as sponges that absorb carbon dioxide.  This process helps reduce the amount of greenhouse gasses in the atmosphere. Silvopasture allows the soil to absorb (take in) 5 to 10 times more carbon than pastures that have no trees. The carbon is sequestered, stored, in the trees and dirt. Ultimately, silvopasture also helps to keep the Earth cooler!`,
            `Peat is extremely important to our Earth and the many systems that regulate our planet. While only three percent of the Earth is covered in peat, only the earth’s oceans hold more carbon dioxide. Peatlands store twice as much carbon dioxide as all of the forests in the world combined! Protecting peatlands from fire and development is a very important way to trap greenhouse gases.`,
            `Afforestation can happen in a few different ways. One way is to plant many different types of trees and perennials that are <span class="bg-sun25">indigenous</span> to the area, meaning they grow naturally in that specific area. Another way is to plant just one kind of tree that grows very fast. In this method trees are planted as if they are a crop, like the way corn is planted and grown. This method makes up the majority of afforestation efforts and the most commonly tree planted is the Monterey pine. The Monterey pine is actually the most planted tree in the entire world! 
                <br><br>However people plant trees, afforestation creates a carbon sink. A carbon sink is when plants, like trees, absorb carbon dioxide from the atmosphere and hold it in their roots and soil.`,
            `Across the world, there are 1.9 billion acres of temperate forests! These forests act as carbon sinks. The World Resources Institute calculated that another 1.4 billion acres of temperate forests could be grown through <span class="bg-sun25">restoration</span> projects. More trees means more carbon could be captured from the atmosphere and this would help reduce the impact of climate change.`,
            `CSP power plants use mirrors to concentrate, or focus, solar rays. These concentrated solar rays heat a fluid, produce steam, and turn <span class="bg-sun25">turbines</span> to create electricity. Concentrated solar power plants need a huge amount of sunlight to create energy so they work best in really sunny and dry places, like deserts.`,
            //16-20
            `Energy that we use to heat and cool rooms and buildings gets wasted because many buildings are not well <span class="bg-sun25">insulated</span>. The heated air, or cooled air, can find its way out of a building through many different ways, such as through cracks around windows and doors. Some materials are better than others for keeping a building well insulated. Buildings that are made out of materials that poorly insulate, such as metal or plastic, basically allow the warm or cold air to leak out. This is how energy is lost due to poor insulation. When builders better insulate a building, the temperature inside stays more constant. We also save energy, and greenhouse gas emissions will not be as high!`,
            `Grassy <span class="bg-sun25">ecosystems</span> around the world <span class="bg-sun25">sequester</span> (trap and hide) a lot of carbon dioxide in their soil in the form of biomass. The health of the environment in grassy ecosystems is improved by wild grazing animals. These are herd animals, meaning they stand very close to one another to make sure no one gets hurt or lost. As they walk, they eat the tops of the grass. This way of eating actually helps the grass grow. As they move around the grassy ecosystem, wild grazing animals’ hooves also dig up the dirt a little bit and mix in their poop and pee. This mixing helps fertilize the soil! As a result, more grass grows and the extra grass traps atmospheric carbon in the soil - combatting one of the key components of climate change.`,
            `<ul class="list-disc pl-4 py-2 pb-5"><li>LEDs use 90% less energy than conventional light bulbs, but make the same amount of light.</li><li>Conventional light bulbs create light by heating special types of metal that glow when they get hot. This process of heating metal to make light wastes a lot of energy. In contrast, LEDs have a different process to make light and they do not give off much heat.</li><li>LEDs are not created with toxic chemicals. Some other light bulbs do contain toxic chemicals. For example, compact fluorescent lights (CFLs) have a small amount of mercury in them.</li><li>LED light bulbs last longer than other light bulbs.</li></ul>`,
            `Many perennial crops have been grown and harvested for centuries, and some are very important to the world’s food supply. This is especially true in tropical areas where many perennial food crops grow. Crops that provide the majority of the food people eat are called <span class="bg-sun25">staple crops</span>. Africa has a lot of staple tree crops including baobab, mafura, argan, and more! These trees can grow in forest-farms and also grow on farms that include many different crops that grow to different heights (multistrata agroforestry).`,
            `The benefits of tree intercropping include:<ul class="list-disc pl-4 py-2 pb-5"><li>Trees protect crops from getting damaged in extreme wind, rain, and sun</li><li>Trees help reduce  <span class="bg-sun25">erosion</span> that can harm the land</li><li>Trees have very long roots and they bring minerals and nutrients (like the vitamins you take) from deep in the soil up to where plants with shorter roots can find them</li><li>Trees create homes for different birds and insect pollinators that help crops grow</li></ul>`
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
            //1-5
            `<span class="font-bold">Food supply chain: </span>
                This is a simple version of how food gets from the farm to our stores. There are lots of different spots where food can get lost or wasted before it even makes it to the store!`,
            `<span class="font-bold">Studying reproductive health: </span>
                Young women in Malope, South Africa study reproductive health.`,
            `<span class="font-bold">Plant-based party: </span>
                Making a feast focused on plants with friends or family is a great way to encourage people to make good choices for the planet.`,
            `<span class="font-bold">Ozone layer over time: </span>
                These images show how the ozone “hole” in the South pole has changed over time. The blue and purple areas are where there is less ozone, so the ozone layer is thinner. The Montreal Protocol was created after scientists saw this “hole” growing larger.`,
            `<span class="font-bold">Promoting recycled paper: </span>
                Young people can help reduce the need for tropical forest restoration by promoting the use of recycled paper products that come from trees as in this skit, Recycled Toilet Paper included in (link to act page)`,
                // ! LINK TO THE ACT PAGE !
            //6-10
            `<span class="font-bold">Acting it out: </span>
                Performing skits is one way to let people know about the benefits of wind power! Here, youth perform a skit, Wind Turbines are Beautiful from the Enacting Climate activities found at (link)`,
                // ! LINK TO THE ACT PAGE !
            `<span class="font-bold">Meeting of the Parties to the Montreal Protocol: </span>
                Each year, every country who signed the Montreal Protocol will send a representative to this meeting to make sure they are meeting the reccommendations made by scientists.`,
            `<span class="font-bold">Acting it out: </span>
                Students at Tuba City High School within the Navajo Nation enact power generation from solar photovoltaics.`,
            `<span class="font-bold">Gathering fuel for cooking: </span>
                In many communities that continue to cook over open flames, women and girls collect the fuel. This arrangement negatively impacts the lives of women and girls more than men and boys.`,
            `<span class="font-bold">Solar panels on a roof: </span>
                More and more homes are getting solar panels as they become less expensive to install. `,
            //11-15
            `<span class="font-bold">Trees sequestering carbon: </span>
                Trees take carbon dioxide (1) and convert it to oxygen (2) for us to breathe. While doing that, the tree also returns carbon back to the soil.`,
            `<span class="font-bold">Peatland Map: </span>
                The green areas on this map are where peatlands are located. The countries in gray are countries that have known peatlands. The countries in gray have known peatlands. Interestingly, almost all countries in the world have peatlands.`,
            `<span class="font-bold">Afforestation in India: </span>
                These people are helping to plant trees as part of an afforestation project in Kanakakunnu, India.`,
            `<span class="font-bold">Enjoying temperate forests: </span>
                If you like to hike,  camp, or visit the outdoors, there’s a good chance that you have visited a temperate forest! It is important to preserve these places for the planet.`,
            `<span class="font-bold">Curved mirrors: </span>
                Normal solar panels are flat. Concentrated solar uses curved mirrors to angle the energy from the sun at the solar tower.`,
            //16-20
            `<span class="font-bold">Recycled insulation: </span>
                This insulation was made from old blue jeans. While all types of insulation help make homes more energy efficient, insulation made from recycled materials uses less energy to make. A win-win!`,
            `<span class="font-bold">Herd of grazing animals: </span>
                Grazing animals travel in herds for safety, like this herd of buffalo in the Serengeti.`,
            `<span class="font-bold">Inside an LED light bulb: </span>
                These light bulbs each have multiple LEDs inside of them (little orange squares) that create bright light when electricity runs through them.`,
            `<span class="font-bold">Staple crop trees: </span>
                This farmer in Kenya has created a climate-smart farm that includes perennial fruit trees. `,
            `<span class="font-bold">Intercropped farm: </span>
                This woman shows her rubber plants and vegetables that she is growing together.`
        ],
        secondSubH: [
            //1-5
            "What can we do to waste less food?",
            "Why is health and education important?",
            "What makes it hard to switch to a plant-based diet?",
            "Revising the Montreal Protocol",
            "How can people help restore tropical forests?",
            //6-10
            "Wind farm land",
            "Alternative refrigerants",
            "Where can I find solar farms?",
            "How does cooking over fires and with simple stoves impact the planet?",
            "Is it expensive to install solar panels on rooftop?",
            //11-15
            "Why is silvopasture a good idea?",
            "Why is protecting peatlands important?",
            "What are tree plantations?",
            "What is threatening temperate forests?",
            "Benefits of concentrated solar power",
            //16-20
            "The thermal layer",
            "What is managed grazing?",
            "Why doesn’t every household use LEDs?",
            "Why are perennial staple crops good for the land?",
            "What can tree intercropping look like?"
        ],
        thirdPar: [
            //1-5
            `The good thing is there are many ways to fix the problem of food waste! To reduce food waste early in the supply chain, low income countries need tools and technology to: <ul class="list-disc pl-4 py-2 pb-5"><li>Store food so it does not go bad</li><li>Move the food more quickly from farms and factories to stores</li><li>Process food to keep it fresh</li></ul> To reduce food later in the supply chain, high income countries can: <ul class="list-disc pl-4 py-2"><li>Set community and state goals for reducing waste</li><li>Help people understand how much food they actually need so they do not buy too much and waste it</li><li>Change negative attitudes about bruised fruits or vegetables with bumps on them</li></ul>`,
            `How many people do you think will live on this planet in 2050, or even in 2100? According to the United Nations there will be 9.4 to 10.1 billion people living on earth in 2050. When young women and girls have access to equal educational opportunities and reproductive healthcare, they generally are more respected by others, have more status in their communities, and have more money.  These factors often lead women to have fewer children. Across the world and over time, when women have less children, the size of the global population goes down.`,
            'What people eat is connected to where they grew up, what they value, and what they were taught to eat as kids. This can make choosing a plant-based diet difficult. But more tasty plant-based foods, such as Beyond Burgers, are becoming available. So, it’s getting easier to not eat meat. <br><br> Another problem is that many governments help ranchers pay for raising cows. As a result, meat is very inexpensive. If this policy changed and the price of meat went up to its true cost, more people might choose a plant-based diet.<br><br> As Zen master Thich Nhat Hanh has said, "making the transition to a plant-based diet may be the most effective way an individual can stop climate change."',
            `In October of 2016, leaders from more than 170 countries came together in Kigali, Rwanda, a country in Africa. They discussed the problems with HFCs and decided to revise the Montreal Protocol. In this revision, countries agreed to slowly stop using HFCs. Scientists calculate that getting rid of HFCs will reduce global warming by one degree Fahrenheit. This might not seem like much, but it is a big deal!
                <br><br>In the revised Montreal Protocol, different countries stop using them based on how much money the country has to pay for new refrigerants. Rich countries had to stop using HFCs by 2019. Countries that do not make as much money have until 2024 or 2028 to switch to new refrigerants. Countries agreed to explore a few different refrigerant options that are much better for the environment. These options include propane and ammonium.`,
            `People now farm on land that was tropical forest. People have turned some valleys that were tropical forest into lakes to store water. There are a few ways people can support the restoration of tropical forests. <ol class="list-decimal pl-4 py-2 pb-5"><li>People can restore tropical forests by letting forests grow back on land that is being used for farming and lakes.</li>
                <li>As forests begin to grow back, people can protect them from fires, <span class="bg-sun25">erosion</span>, and animals.</li><li>People can plant baby trees where adult trees used to grow.</li><li>People can remove  <span class="bg-sun25">invasive plants</span> that don’t belong in tropical forests. </li></ol>Most tropical forests have communities of people who live nearby. It is important to include local communities who live near tropical forests in efforts to restore these forests!`,
           //6-10
           `Wind turbines do not need a lot of land in order to make electricity. Because they do not need a lot of land, the land is available for other uses. Farmers can still plant their crops or let their animals <span class="bg-sun25">graze</span>. People can use the land on wind farms to do their favorite activities, like hiking and biking. Sometimes communities protect the land on wind farms to help <span class="bg-sun25">conserve</span> the environment!`,
           `We need to start using new refrigerants in order to preserve the ozone layer and avoid using chemicals that heat up our earth. As part of the Montreal Protocol, countries agreed to explore a few different refrigerant options that are better for the environment. <span class="bg-sun25">Ammonia</span>, carbon dioxide and even <span class="bg-sun25">propane</span>, are much better for the environment than the refrigerants we have been using. 
                <ol class="list-decimal pl-4 py-2 pb-5"><li>First, they are chemicals that are found in nature and do not need to be created by people.</li><li>Second, compared to the refrigerants we use now, these alternatives have a low global warming potential. This means that they do not trap or release as much heat into the atmosphere over time.</li></ol> Scientists have found that if countries use alternative refrigerants, it will prevent 50.5 gigatons of refrigerants from entering the atmosphere. This is a huge number that can help us fight against climate change!`,
           `Solar farms can be found in deserts, on military bases, and on top of closed landfills that are full of trash. Sometimes they are even built on lakes and reservoirs where the solar panels float on the water!`,
           `Cooking on open fires and simple stoves indoors can impact the Earth in the following ways:
                <ul class="list-disc pl-4 py-2 pb-5"><li><span class="font-bold">Deforestation and forest degradation:</span> Wood is one of the most popular sources of fuel for cooking. Because of this, people around the world cut down many trees and forests. This means that the Earth loses parts of our very important carbon sink.</li><li> 
                <span class="font-bold">Emissions:</span> These cooking practices emite two to five percent of annual greenhouse gas emissions.</li><li><span class="font-bold">Early death:</span> Burning the materials listed above releases methane, carbon dioxide, <span class="bg-sun25">carbon monoxide</span>, and <span class="bg-sun25">black carbon</span> into the air. These things, especially carbon monoxide and black carbon, are what cause so much harm to human health.</li></ul>`,
           `Each year, more people use solar panels. This is because they are getting less expensive. The price is going down because we are getting better at making them and some governments help pay to build them. There are also programs that help people get solar energy by buying panels and renting them to their customers. Unfortunately, the cost to install PV panels is still high, but they are getting cheaper.`,
           //11-15
           `<ul class="list-disc pl-4 py-2 pb-5"><li>Farmers can plant fruit or nut trees in pastures and allow mushrooms to grow. Farmers can then sell the fruit, nuts or mushrooms to make extra money.</li><li>Cows and other farm animals wear down the grass in pastures. They do this when they eat and walk on the grass all day, everyday. By having more living things on pastures, like trees, the farm  <span class="bg-sun25">ecosystem</span> will be healthier and the land will be stronger.</li><li>Silvopasture can help farmers and their animals adjust to different weather patterns and the more frequent droughts that will be a result of climate change.</li></ul>`,
           `Carbon is found in all living things. Usually, 50 percent of peatlands are composed of carbon. If they are disrupted by fire or burned to clear space, peat bogs release the carbon they have stored. This means they will let out A LOT of carbon dioxide.  It only takes a few years to release the carbon from peat, but it takes thousands of years for carbon to turn into peat. This is why it is so important to protect peatlands. 
           <br><br>Luckily, 85 percent of the world’s peatlands are healthy! Restoring the 15 percent of peatlands that have been damaged or drained is one way to combat climate change.`,
           `When many trees of the same kind are planted close together, we call the land where they grow a <span class="bg-sun25">tree plantation</span>. One reason for planting a tree plantation is to make money from harvesting timber and fibers. Recently it is more popular to plant tree plantations for the purpose of absorbing the carbon dioxide out of our air. 
                The idea of tree plantations is an issue for some people. Why? Because some tree plantation owners do not take care of the land - they only care about making money from the land. This can create long-term issues for the land and the people and environment near the plantations.`,
           `While temperate forests are not as threatened as tropical forests, they are still being cut down to create more room for cities and farming. In addition, climate change means that forests will experience hotter and more frequent droughts, longer heat waves, more severe wildfires, and increased insect activity and disease damage. The combination of these impacts can push temperate forests beyond the point they can recover. In order to keep our forests healthy and reduce the impact of climate change, we need to protect the forests we still have and work to restore those that have been damaged.`,
           `Unlike solar panels and wind turbines, CSP creates heat before it makes electricity. The great thing about heat is that it is easier to store than electricity. CSP plants can use the heat created when the sun is shining to warm up tanks full of liquid salt until they are almost boiling! These tanks stay hot for a long time, so CSP plants can continue to make electricity long after the sun goes down each day. 
                <br><br>In 2014, concentrated solar power plants only made 4 gigawatts of electricity, which is not much compared to other solar sources. But as this amazing technology becomes more effective and less expensive, it will likely be used much more because it is very <span class="bg-sun25">reliable</span>!`,
           //16-20
           `Another name for insulation is a building’s <span class="bg-sun25">thermal layer</span>. It is measured as R-value - the higher the better. For example, the R-value of brick is 0.20 while the R-value of typical asphalt roof shingles is 0.44. Shingles insulate better than bricks. The thermal layer of a building needs to cover ALL the different sides and it must not have any cracks or gaps in the floor, outside walls or the roof.`,
           `Sheep and cows are also grazing animals. But they usually live on farms inside of fenced areas. Sometimes they eat more grass than the land can grow. This isn’t good for the land and means that the soil does not sequester as much carbon. To keep the grass healthy and to keep carbon in the soil, farmers can use managed grazing. <span class="bg-sun25">Managed grazing</span> imitates the way wild grazing animals move around the land. With managed grazing, domestic animals move from field to field so they never eat all the grass in one area.`,
           `LED light bulbs cost two or three times more money than conventional light bulbs. The higher price makes it hard for some people to switch to LEDs in their homes. The good news is that LEDs are becoming less expensive! Also, since LEDs last a lot longer than conventional light bulbs, people will save money in the long term because they do not have to buy light bulbs as often. 
                <br><br> More than a billion people in the world live without electricity. For them, solar LED lights are a great option. These lights don’t need to be plugged into the wall. They only need the sun to power them! Solar powered LED lights can replace expensive oil lamps. They are also a better option than oil lamps because LED lights don’t release unhealthy, toxic fumes.`,
           `Staple crop trees that grow in the tropics, land near the equator, help with issues such as <span class="bg-sun25">erosion</span> and excessive water runoff. Their complex root systems allow for water to get into the soil when it rains. The roots add more water into underground water systems and save water in the soil for dryer times. The tropics are made up of a lot of different landscapes, which sometimes limits where plants can grow. But not tropical staple crops! They can grow on steep slopes of hills and in many different types of soils. Because perennial plants and crops are very strong, humans use less fuel, pesticides and fertilizers to help them grow and produce food.`,
           `Trees and crops can be combined in many different ways. There are two main ways:<ul class="list-disc pl-4 py-2 pb-5"><li><span class="font-bold">Alley cropping</span> is when trees are planted in rows with crops in between them. This method helps trees fertilize crops.</li><li> <span class="font-bold">Parkland systems</span> are when trees are scattered throughout fields with crops. There are many other ways to combine trees and crops and most of them make fields beautiful.</li></ul>
                Some combinations of crops and trees include: <ul class="list-disc pl-4 py-2 pb-5"><li>chili pepper plants and coffee trees</li><li>marigolds and coconut trees</li><li>walnut trees and corn</li><li>citrus trees and eggplant</li><li>olive trees and barley</li><li>teak trees and taro</li><li>oak trees and lavender</li></ul>There are endless possible combinations of trees and crops!`
        ],
        thirdSubH: [
            //1-5
            "no",
            "Why is considering the wealth of a country important?",
            "no","no","no",
            //6-10
            "Wind Farms are fast to build",
            "no","no","no",
            "Solar PV panels can bring unlimited electricity to places where it is needed!",
            //11-15
            "no","no","no","no","no",
            //16-20
            "no",
            "What do farmers have to think about?",
            "Should we use LEDs in stores and offices? In streetlights?",
            "no","no"
        ],
        fourthPar: [
            //1-5
            `Aside from reducing emissions, reducing food waste is important for another reason too. The world’s population is growing every year. If we create global systems to prevent food waste, there can be enough food to feed everyone.`,
            `People in wealthy countries only make up 10% of the world’s population but they create more than 50% of greenhouse gas emissions that cause climate change. As a result, population growth in wealthy countries impacts climate change more than population growth in less wealthy countries.  People might feel a variety of emotions related to the topic of population growth. Some people might feel or say mean things. Ultimately, people’s choice about how many children to have should be their personal choice. And all children should inherit a livable planet.
                <br><br>It is important that we always focus on the goals of human rights and equal treatment of women and all genders. Working toward this goal benefits both humans and the planet.`,
            `no`,`no`,`no`,
            //6-10
            `It takes about one year for engineers to build an entire wind farm! That means that people can start producing and using wind energy quickly. It also means that communities and companies that spend money to build wind farms can make their money back quickly.`,
            `no`,`no`,`no`,
            `In places where most homes and businesses are connected to power lines, solar panels help people disconnect from the power line system and control their own electricity. In places where there are no electric utilities or power lines, solar panels can help people access electricity. Solar PV panels do not require big companies or fossil fuels. By providing a way for people to access electricity on their own, solar PV panels can help eliminate poverty.`,
            //11-15
            `no`,
            `no`,
            `A Japanese plant expert, named Akira Miyawaki, created another method of afforestation. He plants trees that grow very quickly and are indigenous to the land! So, he has found that this combination helps with quite a few things:
                <ul class="list-disc pl-4 py-2 pb-5"><li>Brings down the amount of carbon dioxide in our air</li><li>Creates a source for firewood, food, and medicine</li><li>Protects areas from floods and droughts</li><li>Increases the <span class="bg-sun25">biodiversity</span> of the area</li></ul>`,
            `no`,`no`,
            //16-20
            `no`,
            `When farmers decide to use managed grazing, they have to understand two things.<ol class="list-decimal pl-4 py-2 pb-5"><li>How long can their animals stay in one spot before they eat too much grass and hurt the land?</li><li>How long should they wait for the land to recover before they can graze the same grass again? </li></ol>
                There are three ways farmers and ranchers can manage grazing:<ul class="list-disc pl-4 py-2 pb-5"><li>Make sure there are not too many animals in each field so that every animal has enough food.</li><li>Rotate where the animals are eating. This helps spread the animals’ impact to other parts of land and allows the grass to regrow before animals return.</li>
                <li>Move animals quickly between smaller fields. This gives the land time to recover before animals return.</li></ul>`,
            `Absolutely. Lights use 15 percent of the world’s electricity. Since LEDs do not get hot like traditional light bulbs, they use less electricity. LEDs also won’t make indoor spaces warmer and require air conditioning to cool them down. <br><br>Some towns have switched to LED lights in their streetlights. This change can save up to 70 percent of the energy streetlights normally use with conventional lights. Streetlights with LEDs are also less expensive because the LEDs last a long time and money is not wasted in changing light bulbs.`,
            `no`,`no`
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
        secondImgCap: [
            //1-5
            `<span class="font-bold">Acting it out: </span>
                To help change negative attitudes about ugly produce, these kids wrote a comedy sketch to laugh about it. Making a subject funny is a good way to raise awareness.`,
            `<span class="font-bold">Speaking up to protect the planet: </span>
                These young women are members of SPEAK.WORLD, an organization that empowers young women to use their voices for change. `,
            `<span class="font-bold">Plant-based burgers: </span>
                New plant-based burgers are being made to taste just like hamburgers. People may eat more plant-based foods when they look more like the meat-based foods they like.`,
            `<span class="font-bold">Montreal Protocol timeline: </span>
                This timeline shows when major events for the Montreal Protocol happened.`,
            `<span class="font-bold">New Guinea forests: </span>
                New Guinea has more plant species than any other island. These researchers are learning about the forest and its plants so they can better protect it.`,
            //6-10
            `<span class="font-bold">Wind turbine setup: </span>
            Engineers set up wind turbines on existing farmland, and they only need to come for repairs.`,
            `<span class="font-bold">Acting it out: </span>
            Comedic skits can actively communicate local actions for refrigerant management in a fun and engaging way. In this skit entitled “Grandma Fridge Cools Off” a family is taking their aging grandmother, who is a refrigerator, to Rocky Mountain National Park for one last vacation before she gets properly recycled through an Environmental Protection Agency-approved local program. This was performed at Rocky Mountain National Park on Discovery Day to educate park visitors about the importance of properly disposing of aging refrigerators. The skit is available at (link) `,
                //LINK TO ACT PAGE
            `<span class="font-bold">Desert solar farm: </span>
                Solar farms work well in flat, hot places that get lots of sunlight.`,
            `<span class="font-bold">Open fire cooking: </span>
                It is important to consider the people who will use clean cookstoves when we design them. A local non-profit organization gifted this woman, in Chajul, Guatemala, a clean cookstove. (You can see it behind her this photo). However, she continues to cook on a three stone open fire because she prefers her traditional way of cooking. The new clean stove is too tall, not easy for her to use.`,
            `<span class="font-bold">Solar LED Lighting: </span>
                LED lights are very energy efficient, so they can be used with solar panels to bring light to places that do not have a power grid. This woman is fixing the solar powered light for her village in India.`,
            //11-15
            `<span class="font-bold">Silvopastoral Farm: </span>
                Cows grazing in fields that use silvopasture can rest in the shade of the trees. This can help the both the cows and the pasture recover.`,
            `<span class="font-bold">A piece of peat: </span>
                This may look like just dirt, but it is actually peat! This chunk is full of decayed organic matter. It is very rich with carbon and could be burned, almost like wood.`,
            `<span class="font-bold">Earth Guardian Leaders: </span>
                Youth leaders of the activist group Earth Guardians created a “pledge to plant” Earth Day challenge to their international youth groups to encourage the planting of trees on degraded land.`,
            `<span class="font-bold">Save old growth forests: </span>
                Activists in Vancouver, Canada are speaking up about protecting old growth forests to help save our climate. `,
            `<span class="font-bold">Solar power tower: </span>
                This concentrated solar power plant tower in California glows at night becuase the inside is full of liquid salt that stays warm after the sun goes down.`,
            //16-20
            `<span class="font-bold">The thermal layer: </span>
                This is a simple diagram that shows how insulation keeps the temperature inside the house cool even though the sun’s warm rays touch the roof, walls, and windows. `,
            `<span class="font-bold">Cattle grazing: </span>
                Cows can help keep the grass trimmed, but if they graze for too long, they will eat too much grass. By moving cows between fields, the grasses stay healthy because they have time to regrow.`,
            `<span class="font-bold">LED stage lighting: </span>
                This green suited students is lit by theatrical LED lights which are energy efficient. Green Suits is a fun participatory photography project to communicate climate.`,
            `<span class="font-bold">Acting it out: </span>
                These youth are enacting a skit about how both tomatoes and eggplants are foods that can grow as perennials in some areas.`,
            `<span class="font-bold">Tropical intercropping: </span>
                This farm is Rwanda grows coffee plants and banana trees together.`,
        ],
        fourthSubH: [
            //1-5
            "no","no",
            "What does each type of plant-rich diet look like?",
            "What can I do?",
            "no",
            //6-10
            "What happens when the wind is not blowing?",
            "no",
            "How much does solar energy cost?",
            "Improved cookstoves",
            "no",
            //11-15
            "Why don’t all farmers use silvopasture?",
            "no","no","no","no",
            //16-20
            "no",
            "Benefits of managed grazing",
            "What does all of this mean?",
            "The land needs more perennial staple crops",
            "no"
        ],
        fifthPar: [
            //1-5
            `no`,
            `In its most recent report on “world population prospects,” the United Nations says that the international community has committed to making sure that all people can decide when they want to have children and how many children they will have. This commitment can change the world because it helps humans address climate change by using fewer resources.`,
            `<ul class="list-disc pl-4 py-2 pb-5"><li>In a <span class="bg-sun25">plant-rich diet</span>, people may still eat meat, but it is not the focus of their diet. Instead, they try to eat mostly plants and occasionally include meats with low greenhouse gas emissions.</li><li>In a <span class="bg-leaf25">vegetarian diet</span>, people don’t eat meat but they do eat things like cheese, milk, and eggs. If we all ate this way, we could reduce greenhouse gas emissions by 63 percent.</li><li> 
                In a <span class="bg-sky25">vegan</span> diet, people don’t eat any foods that come from animals at all. This means they do not eat meat, cheese, milk, or eggs. If everyone ate this way, we could reduce greenhouse gas emissions by up to 70 percent.</li></ul> Any of these diets could help us save up to $1 trillion dollars in health care costs.`,
            `<span class="font-bold">Ninety percent of the refrigerants that enter the air escape after refrigerators and air conditioners get old and people throw them away.</span> If people are more careful about how they throw away their old refrigerators and air conditioners, we can keep this from happening. When people take their old appliances to special recycling centers, recycling companies can purify the old refrigerant chemicals and reuse them or even turn them into other things! Recycling and reusing refrigerant is important because it keeps those chemicals from going into the atmosphere and warming Earth.`,
            `no`,
            //6-10
            `Even though wind turbines can make a lot of energy, the wind isn’t always blowing. So, wind energy must be part of a system. Other actions we can take to build a green energy system include:<ul class="list-disc pl-4 py-2 pb-5"><li>Convert solar and geothermal energy into electricity</li><li>Build batteries that can store a lot of energy</li><li>Create new systems to help move energy around communities.</li><li>Using all of these elements together, we can produce the energy we need without burning fossil fuels.</li></ul>`,
            `no`,
            `Back in 1954, Bell Labs created silicon PV technology, which is what we use today in solar panels. At that time, almost 70 years ago, that technology was very very expensive. It would sell for $1,900 per <span class="bg-sun25">watt</span>. That cost has dropped so much that solar energy is sometimes even cheaper than fossil fuel created electricity. Today solar costs $0.65 per watt!
                <br><br>Solar energy is cheaper today because:<ul class="list-disc pl-4 py-2 pb-5"><li>People invested, or gave their money, to solar scientists and engineering companies</li><li>Governments gave benefits to make solar cheaper</li><li>Scientists created better technology</li><li>Engineers created better processes to build the panels</li></ul>
                Solar farms are an important part of our transition to greener energy. We are working towards a clean energy revolution with cheaper costs for solar panels, better technology to capture and store solar energy, and the power of other renewable energy!`,
            `Luckily, engineers, scientists and community memebers have created ‘improved cookstove’ technology to address the problems you have just learned about. This technology forces the gases and smoke back into the cooking flames where it goes through a second cycle of burning. In some improved cookstoves, this process decreases the amount of smoke and emissions released into the air by 95 percent! 
                <br><br>The Global Alliance for Clean Cookstoves was created in 2010 by the United Nations. It is an organization that helps people around the world buy clean cookstoves. They make sure clean cookstoves are not too expensive, that they are durable, and that the technology works well. Their mission is to help people cook meals without hurting themselves, their families, or the planet.`,
            `no`,
            //11-15
            `Silvopasture is not the most popular way to raise cows and other farm animals. As a result, some farmers are hesitant to try it. Also, at first silvopasture costs more money than having fields of only grass.. It takes time for farmers to start to make money from silvopasture, so it can be hard for farmers to make the switch. To raise awareness about the positive impact of silvopasture, farmers can talk to each other about it. When farmers share their experiences, they can learn from and support one another as they make more environmentally friendly changes to their farms and farming practices.`,
            `no`,`no`,
            `While temperate forests are not as threatened as tropical forests, they are still being cut down to create more room for cities and farming. In addition, climate change means that forests will experience hotter and more frequent droughts, longer heat waves, more severe wildfires, and increased insect activity and disease damage. The combination of these impacts can push temperate forests beyond the point they can recover. In order to keep our forests healthy and reduce the impact of climate change, we need to protect the forests we still have and work to restore those that have been damaged.`,
            `no`,
            //16-20
            `Insulation is one of the best ways to make a building energy efficient! It is cost effective, meaning it is a bit expensive but overall you save money after several years because you spend less money on energy for heating and cooling. Builders add insulation to new buildings. In older buildings, builders can replace the old thermal layers with new ones. Insulation can also protect buildings from water damage. This is important in places like Florida that have a lot of rain and storms. Lastly, insulation can make the quality of the air inside of a building healthier!
                <br><br>All around, insulation is necessary. It makes buildings more comfortable to live and work in and it lowers energy bills. Perhaps most importantly, it is a simple way to reduce greenhouse gas emissions! `,
            `Managed grazing is good for every part of the farm animal ecosystem. It allows the soil to hold more water so plants are healthy. It helps animals find grass so they stay healthy and grow quickly. And it helps sequester more carbon in the soil - 0.5 to 3 tons of carbon for every acre of land (about one football field)!`,
            `Almost any light bulb can be replaced by an LED. Eventually, LEDs will replace all conventional light bulbs. People will be able to light their homes and businesses while using less electricity.`,
            `Today, about 89 percent of agricultural land is used to grow annual plants. That is almost 3 billion acres just for crops like corn! One acre is only a little bit bigger than an American football field. 3 billion football fields is a lot of land and a lot of energy used to grow these annual crops. When land used to grow annual crops is converted to perennial crops, the amount of carbon the land and plants can absorb increases by about two tons per acre! Climate change is a global problem and will change plant-growing conditions around the world. This makes perennial crops even more important. 
                Perennial plants can live in a lot of different places and are much more resilient to the weather changes that we will see in the future.`,
            `As machines replaced people working in crop fields over the past 100 years, the mixing of crops and trees became much less common. Farmers are now realizing the importance of tree intercropping. It can help us grow healthy food, take care of the land, and address global warming at the same time.`
        ],
        thirdImg: [
            //1-5
            "no","no","no","no","no",
            //6-10
            "no","no","no","img/s9-3.jpg","no",
            //11-15
            "img/s11-3.jpg","no","no","no","no",
            //16-20
            "no","no","no","no","no"
        ],
        thirdImgCap: [
            //1-5
            "no","no","no","no","no",
            //6-10
            "no","no","no",
            `<span class="font-bold">Potter with clean cookstove: </span>
            This pot maker from Tanzania has started to make clean cookstoves for himself and other members of his community.`,
            "no",
            //11-15
            `<span class="font-bold">Farmers share their experience: </span>
            Farmers who use silvopasture methods can share their experiences with other farmers. Sharing ideas can help more farmers start to use silvopasture. `,
            "no","no","no","no",
            //16-20
            "no","no","no","no","no"

            //`<span class="font-bold">caption: </span> caption `
        ],
        solutionIndex: 0
    },
    methods: {
        left: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex--;
            if(this.solutionIndex == -1){
                this.solutionIndex = 19;
            } 
        },
        right: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex++;
            if(this.solutionIndex == 20){
                this.solutionIndex = 0;
            } 
        },
        leftTop: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex--;
            if(this.solutionIndex == -1){
                this.solutionIndex = 19;
            } 

            document.body.scrollTop = 75; // For Safari
            document.documentElement.scrollTop = 75; // For Chrome, Firefox, IE and Opera
        },
        rightTop: function () {
            console.log(this.bgImgs[this.solutionIndex]);
            this.solutionIndex++;
            if(this.solutionIndex == 20){
                this.solutionIndex = 0;
            } 

            document.body.scrollTop = 75; // For Safari
            document.documentElement.scrollTop = 75; // For Chrome, Firefox, IE and Opera
        },

    }
  })
  