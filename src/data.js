// this file should consist of all of data and be sent to store,
// so that the local data files can be removed (on a component level)

export const data = {
  volunteer: {
    volunteerBlurb: 'Are you looking for a meaningful way to give back to your community? Do you want to help create a more inclusive and accepting environment for all? Join the Chippenham Pride team as a volunteer!<br /> Whether you have a few hours a week or a few days a month, we welcome volunteers of all backgrounds and experiences. Together, we can create a brighter future for Chippenham and beyond. Join us today and help us make history!',
    volunteerMsg: 'Hey Pride, I\'d like to help out with organising the event. Please reach out to me so I can get involved. Cheers!'
  },
  navbar: [
    {
      title: 'Home',
      url: '',
    },
    {
      title: 'Event Details',
      submenu: [
        {
          title: 'General Info',
          url: 'details'
        },
        {
          title: 'Main Stage',
          url: 'details/main-stage'
        },
        {
          title: 'Comedy',
          url: 'details/comedy'
        },
        {
          title: 'Speakers',
          url: 'details/speakers'
        },
        // {
        //   title: 'Community Stalls',
        //   url: 'details/community-stalls'
        // },
        {
          title: 'Stalls',
          url: 'details/stalls'
        }
      ]
    },
    {
      title: 'About',
      submenu: [
        {
          title: 'About Pride',
          url: 'about'
        },
        {
          title: 'The Team',
          url: 'about/the-team'
        },
        {
          title: 'Terms and Conditions',
          url: 'tsandcs'
        }
      ]
    },
    {
      title: 'Sponsor Pride',
      url: 'sponsor',
  
    },
    {
      title: 'For Business',
      url: 'for-business'
    },
    {
      title: 'Contact Us',
      url: 'contact',
  
    }
  ],
  lineup: [
    {
      place: 'main stage',
      sponsors: 'chippenham motor company',
      list: [
        { artist: 'the decibels', time: '12.30pm' },
        { artist: 'Welcome Pride', time: '1.15pm' },
        { artist: 'Sheila Tackya', time: '1.25pm' },
        { artist: 'Becky & Stuart', time: '2 pm' },
        { artist: 'Meg', time: '3.30 pm' },
        { artist: 'Winner', time: '4 pm' },
        { artist: 'Pheebs Pole Fit', time: '4.30 pm' },
        { artist: 'Boston Green', time: '4.45 pm' },
        { artist: 'Rock Choir', time: '5.30 pm' },
        { artist: 'The Real Cheesmakers', time: '6 pm' },
        { artist: 'Nyther Silence', time: '6.45 pm' },
        { artist: 'Pheebs', time: '7.15 pm' },
        { artist: 'Smash By', time: '7.30 pm' },
        { artist: 'Courtney Jackson (Drag)', time: '8.15 pm' },
        { artist: 'Concrete Prairie', time: '9 pm' },
        { artist: 'Stage Close', time: '10.10 pm' },
      ]
    }
  ],
  eventDetails: [
    {
      data: [
        {
          name: "Concrete Prairie",
          url: 'https://www.facebook.com/concreteprairie/',
          img: "https://i.postimg.cc/050hnLDN/concerte-praire.jpg",
          type: "band",
          description: "United by a love of all things Indie, Folk & Americana, Concrete Prairie are a five-piece ensemble delivering a veritable soundtrack for the glamour and grit of modern living. While their compositions tackle themes such as mental well-being, loss and hardships, the songs are shot through with hope, evidenced by a spirited and rousing sound orchestrated with twanging guitars, straining fiddle and yearning prose. Dance if you dare, cry if you want to.",
        },
        {
          name: "Stuart Rolfe",
          url: 'https://www.facebook.com/DaylightStealers/?locale=en_GB',
          img: "https://i.scdn.co/image/ab6761610000e5eb2f34440ca30dd0c4e8f6b588",
          type: "band",
          description: "I spent many years as a session musician in Country Music, working with names such as Tim McGraw and Faith Hill, Mark Knopfler and Jason Aldean. I have since left the nest and taken the plunge to become an artist myself. Writing and performing my own written works as well as covers of some of the classics.",
        },
        {
          name: "Sheila Tackya",
          url: 'https://www.instagram.com/samistackers/',
          img: "https://i.postimg.cc/9FdLBT9H/sam.png",
          type: "drag",
          description: "Beautiful queen will perform at our stage. With flawless makeup and expertly styled hair, she lip-syncs to the biggest hits and gets the crowd dancing along in no time. Her performance is a dazzling display of glamour, humor, and pure entertainment.",
        },
        {
          name: "Becky Lawrence",
          url: 'https://beckylawrence.co.uk/',
          img: "https://i.postimg.cc/BbZqpByt/becky-Lawrence.png",
          type: "band",
          description: "Drifted from the shores of the Isle of Man, Becky Lawrence is a singer/songwriter and storyteller, now residing in Wiltshire. From years of threading the boards in hit shows such as 'Les Miserables', 'Miss Saigon' and 'Evita', to cowboy boots and writing her own songs, Becky loves nothing more then bringing her audience on a journey everytime she performs. She'll make you laugh, sometimes make you cry and above all, she hopes she can make you feel or heal through her story telling.",
        },
        {
          name: "The Real Cheesemakers",
          url: 'https://realcheesemakers.com/',
          img: "https://i.postimg.cc/0NXv2h5n/trc.jpg",
          type: "band",
          description: "Following tour supports with The US Office’s Creed Bratton and Oldie Looking Chain, Wiltshire’s favourite nonsense group, The Real Cheesemakers, are back in Chippenham for the inaugural Pride event. 'Psychedelic, surrealist-edged rock… as if Spike Milligan was Iron Maiden’s frontman, yet they were a Wurzels tribute'",
        },
        {
          name: "Boston Green",
          url: 'https://www.facebook.com/BOSTONGREEN123456/',
          img: "https://i.postimg.cc/qMJJkc41/bgreen.jpg",
          type: "band",
          description: "They’ve written multiple originals with varying influences between each of the songs. They sit within an Indie-Rock/Alternative genre, but be prepared to hear many of your favourite songs from throughout the years as they love taking covers and bringing a new spin on them.",
        },
        {
          name: "Rock Choir Wiltshire and Somerset",
          url: 'https://www.facebook.com/rockchoirnorthwiltshire',
          img: "https://i.postimg.cc/xC55CHZZ/rock-choir.png",
          type: "band",
          description: "Rock Choir is the UK’s leading contemporary award-winning choir experience offering local weekly rehearsals, performances and life-affirming events to more than 400 towns and communities across the UK.",
        },
        {
          name: "The Decibelles",
          url: 'https://www.thedecibelles.com/',
          img: "https://images.squarespace-cdn.com/content/v1/6078246c17218a62b0e0e844/2d9556ac-bc26-401c-aa83-d732bd1dba25/170512YDMC2221.jpg?format=500w",
          type: "band",
          description: "The DeciBelles are an award winning function band who pride themselves on creating the perfect atmosphere for any event. From small intimate engagements with their Duo and Unplugged setups, to their full show stopping, tour-de-force electric band! The DeciBelles  are experts in creating the perfect atmosphere will make it an event to remember!",
        },
        {
          name: "Pheebs Pole Fit",
          url: 'https://www.polefitnessstroud.co.uk/studio/pole-workshops/pole-position-fitness-stroud-twerkshop-twerking-pheebspolefit-3/',
          img: "https://i.postimg.cc/D06tL043/pheebs.png",
          type: "pole dancer",
          description: "",
        },
        {
          name: "Nyther Silence",
          url: 'https://www.facebook.com/nythersilence/',
          img: "https://i.postimg.cc/Pf7brhRC/nsilence.jpg",
          type: "band",
          description: "Nyther Silence are a London based music duo consisting on Panos B & Mark Anthony. The group released their 1st album “Urban Tales” in October 2020, and are currently promoting their 2nd album “Recharge”, which was released in August last year. The groups music can be described as high energy pop & dance music.",
        },
        
        {
          name: "Courtney Jackson",
          url: 'https://www.instagram.com/itscourtneyjackson/?hl=en',
          img: "https://www.dorsetview.co.uk/wp-content/uploads/2022/10/Courtney-Jackson.jpg",
          type: "drag",
          description: "",
        },
      ],
      url: "/details/main-stage",
      type: "main stage",
    },
    {
      data: [
        {
          name: "Lord Michael Cashman",
          url: 'https://www.lordmichaelcashman.com/',
          img: "https://www.lordmichaelcashman.com/assets/img/portfolio/6.jpg",
          type: "speaker",
          description: "Born and raised in the East End of London, Michael had a highly successful career as an actor, singer, writer and director. Elected member of the Labour Party National Executive for 12 years, serving as vice-chair and chair. Co-president of the LGBT Intergroup, vice-president of the Petitions Committee, president of South African Delegation and chair of Delegation Chairs. Co-founder and founding chair of the Stonewall Group. Labour Party’s LGBT Global Envoy 2014-16",
        },
        {
          name: "Peter Tatchell",
          url: 'https://www.petertatchell.net/',
          img: "https://www.abertay.ac.uk/media/6031/peter-tatchell.jpg",
          type: "speaker",
          description: "Peter Tatchell has been campaigning for human rights, democracy, LGBT+ freedom and global justice since 1967. Peter’s key political inspirations are Mahatma Gandhi, Sylvia Pankhurst, Martin Luther King and, to some extent, Malcolm X and Rosa Luxemburg. He has adapted many of their methods to his contemporary non-violent struggle for human rights – and invented a few of his own.",
        },
        {
          name: "Ian Watkins 'H'",
          url: 'https://www.instagram.com/ianhwatkins/?hl=en',
          img: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTvZFlaCohGF2cU8UeqSABQNxbmo3-QT1iTRpbbJ5698c55QogN54Uu36VUs1xTrE58W0rzCXMQp9ESI5U",
          type: "speaker",
          description: "Ian Watkins, known professionally as H, is a Welsh singer and actor. He's well-known as a member of the British pop group Steps and became part of the first same sex couple on 'Dancing on Ice' in 2020.  He is a proud gay man and role model and successfully launched a Pride event in his home town, with all of the money raised going to local schools for LGBTQI+ resources.  He is a passionate advocate for the trans and non-binary communities, 'I want my children to grow up celebrating diversity and representation'",
        },        
        {
          name: "Eva Echo",
          url: 'https://www.wecreatespace.co/team/eva-echo',
          img: "https://i.postimg.cc/G23hXX4J/Eva-Echo.jpg",
          type: "speaker",
          description: "Eva Echo (she/they) is an activist, writer and public speaker focusing on transgender rights and mental health. She uses her own experiences to shed light on what it is to be transgender. Most notably, Eva took legal action against NHS England in the High Court to challenge unlawful waiting times for trans patients. She won the DIVA Award for Unsung Heroes of the Year 2022 and was named on the DIVA Power List.",
        },
        {
          name: "Emily Hamilton",
          url: 'https://www.transinthecity.co.uk/leadership.html',
          img: "https://i.postimg.cc/C1Crx47t/Emily-Hamilton.jpg",
          type: "speaker",
          description: "Emily is a senior leader in Trans in the City and a 20+ year professional in the field of Programme and Project Management. She transitioned at work in 2019 and is passionate about increasing visibility of members of the LGBTQ+ community and amplifying women’s voices in the workplace.",
        },
        {
          name: "Linda Riley",
          url: 'https://www.lindariley.co.uk/',
          img: "https://static.wixstatic.com/media/9f212f_be30482267ad409ea4919577c2953c0d~mv2.jpg/v1/crop/x_0,y_130,w_4608,h_2941/fill/w_940,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/191114_EuropeanDiversityAwards_Capture_0.jpg",
          type: "speaker",
          description: "Linda began her career in publishing over 20 years ago as joint publisher of both g3 and Out in the City magazine, and started working in diversity related events a decade later. She has become a powerhouse in the diversity and inclusion sector, starting initiatives such as the Global Diversity List, British and European Diversity Awards, the Pride Power List and many more.",
        },
        {
          name: "Lisa Power",
          url: 'https://twitter.com/alisapower?lang=en',
          img: "https://www.cumberlandlodge.ac.uk/sites/default/files/styles/sereno_small_x1_767px_/public/lisa_power_preferred_crop_for_web.jpg?itok=nBoo1FiN",
          type: "speaker",
          description: "She has been a volunteer for the Lesbian & Gay Switchboard and secretary general of the International Lesbian and Gay Association. She co-founded the Pink Paper and Stonewall, later becoming policy director at the Terrence Higgins Trust. She was the first openly LGBT person to speak at the United Nations and continues to work and volunteer as a LGBT+ and sexual health activist in Wales with groups such as Fast Track Cardiff and Vale and Pride Cymru.",
        },
        {
          name: "Bobbi Pickard",
          url: 'https://www.transinthecity.co.uk/',
          img: "https://champions-speakers.co.uk/sites/default/files/styles/profile_gallery_xs/public/2022-07/new_project_2_0.jpg.jpeg?itok=IU3IKgY3",
          type: "speaker",
          description: "Bobbi Pickard is a Diversity Equity and Inclusion professional with many years senior operational and programme management experience in the banking, trading, technology and energy sectors. She is CEO of Trans in the City an organisation she founded in response to seeing a lack of co-operative working between global corporates to help the trans and non-binary community and has transformed it into a global organisation with over 350 major organisations collaborating on furthering trans awareness across the world.",
        },
        {
          name: "Skye Morden",
          url: 'https://www.transinthecity.co.uk/uploads/1/2/4/1/12414535/bobbiwebsite_orig.jpg',
          img: "https://i.postimg.cc/KvCPCMrg/Skye-Morden.jpg",
          type: "speaker",
          description: "Skye Morden is a highly decorated police officer with over 22 years of service to the people of the UK. She is currently a taser lead instructor and public order & safety trainer. Skye is a renowned speaker in both the public and academic sectors as well as being a PhD advisor. She is also a Director for Trans in the City and a trustee for Birmingham LGBT. Skye aims to show that trans, non-binary and gender-expansive people are just simply human with a great deal to offer. She is the 2021 Pride of Britain & Pride of Birmingham Special Recognition winner.",
        },
      ],
      url: "/details/speakers",
      type: "speakers theatre",
    },
    {
      data: [
        {
          name: "Andrew O'Neil",
          url: 'https://www.andrewoneill.co.uk/',
          img: "https://www.chortle.co.uk/images/photos/small/aon-andrew-oneill-22.jpg",
          type: "comedian",
          description: "Andrew O'Neill is an award-winning comedian,  musician and best-selling writer. A psychedelic non-binary whirlwind, they combine surrealism, polemic and good old-fashioned stagecraft to produce uniquely counter-cultural stand-up.",
        },
        {
          name: "Sooz Kempner",
          url: 'https://www.soozkempner.co.uk/',
          img: "https://cdn.comedy.co.uk/images/library/people/900x450/s/sooz_kempner.jpg",
          type: "band",
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
        {
          name: "Jonathan Mayor",
          url: 'https://google.com',
          img: "https://www.comedygigs.co.uk/img-artists/artist-1183-1.jpg",
          type: "band",
          description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        },
      ],
      url: "/details/comedy",
      type: "comedy",
    },
    // {
    //   data: [
    //     {
    //       name: "Stu",
    //       url: 'https://google.com',
    //       img: "https://i.scdn.co/image/ab6761610000e5eb2f34440ca30dd0c4e8f6b588",
    //       type: "band",
    //       description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    //     },
    //   ],
    //   url: "/details/community-stalls",
    //   type: "stalls",
    // },
  ],
  
  stalls : [
    {stallName: 'HCRG Care Group', type: 'wellbeing',},
    {stallName: 'Splits (renamed)', type: 'wellbeing',},
    {stallName: 'The Rise Trust', type: 'wellbeing',},
    {stallName: 'Doorway', type: 'wellbeing',},
    {stallName: 'Rethink', type: 'wellbeing',},
    {stallName: 'Samaritans', type: 'wellbeing',},
    {stallName: 'Smash', type: 'wellbeing',},
    {stallName: 'Kandu Arts', type: 'wellbeing',},
    {stallName: 'Girl Guides', type: 'wellbeing',},
    {stallName: 'CMC & two cars', type: 'other',},
    {stallName: 'Pheebs pole fit - pole play', type: 'other',},
    {stallName: 'Chippenham Football Club ', type: 'other',},
    {stallName: 'Hogs Heaven', type: 'food',},
    {stallName: 'The Plant Kitchen', type: 'food',},
    {stallName: 'Burger Bus', type: 'food',},
    {stallName: 'Little Rainbow Jewels ', type: 'commercial',},
    {stallName: 'Glo Emporium ', type: 'commercial',},
    {stallName: 'Sent with Pride', type: 'commercial',},
    {stallName: 'Lynne Powell- beaded goods', type: 'commercial',},
    {stallName: 'Sweets n Treats', type: 'commercial',},
    {stallName: 'Fabling Boutique', type: 'commercial',},
    {stallName: 'Paintings by Lucia', type: 'commercial',},
    {stallName: 'LGBT Llama', type: 'commercial',},
    {stallName: 'Gilly Jean Crafts', type: 'commercial',},
    {stallName: 'Hazel Gibbs', type: 'commercial',},
    {stallName: 'Cara Designs', type: 'commercial',},
    {stallName: 'Gonks', type: 'commercial',},
    {stallName: 'Concrete prairie - merch', type: 'commercial',},
    {stallName: 'Pride Merch', type: 'commercial',},
    {stallName: 'Pride Silent Auction ', type: 'commercial',},
    {stallName: 'Pride Face Painting', type: 'commercial',},
    {stallName: 'HCRG Care Group', type: 'wellbeing',},
  ],
  merchLink: {
    header: "Our Merch",
    text: "By purchasing merchandise from the event's website, not only can you show your support for the LGBTQ+ community, but you can also help fund future events and initiatives. So, don't hesitate to check out the merchandise website and grab some awesome items to commemorate this amazing event!",
    url: "https://chippenham-pride.myspreadshop.co.uk/?fbclid=IwAR391NZkGIadBRY8Kdw9sqT33QOLfgQk15eYOhRe67OscgAX7Xa4y1iM64c",
    alt: "merchandise website",
    button: 'go to our store',
    img: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1155A1PA2483PT17X42Y8D317406624W16755H25000/views/1,width=650,height=650,appearanceId=1/chippenham-pride-2023-official-merchandise.jpg'
  },
  generalInfo: {
    text: {
      paragraphs: [
        { id: 0, text: "Chippenham pride has been a year in the making. The team (made up completely by volunteers) have been busy working on bringing you the best of local entertainment, small business retailers, inspirational speakers and hilarious comedy acts."},
        { id: 1, text: "It’s our aim to provide Chippenham with not only its first ever pride event but also a family event that welcomes everyone no matter what their gender, sexuality, colour or age."},
        
      ]
    }
  },
  tsncs: [
    {variant: 'nohover', carousel: false, title: 'Alcohol Policy', text: 'Chippenham Pride are vendors of alcohol and will not have an bars onsite. We encourage anyone bringing alcohol to the park area to do so in plastic or recyclable containers and not glass.', img: 'https://cdn.pixabay.com/photo/2014/04/02/14/04/glass-306047_960_720.png', alt: 'drink'},
    {variant: 'nohover', carousel: false, title: 'Drugs Policy',text: 'ZERO tolerance policy to drugs and legal highs; in the event of discovering users or dealers within any of the areas these shall be reported to the police and security for immediate removal.', img: 'https://cdn.pixabay.com/photo/2018/04/06/19/39/symbol-3296654_960_720.png', alt: 'pills'},
    {variant: 'nohover', carousel: false, title: 'Drones Policy',text: 'Drones will not be permitted at any time in the Island Park unless accompanied by a CAA licence. Unless previously agreed with The Chippenham Pride Committee and Chippenham Town Council.', img: 'https://cdn.pixabay.com/photo/2021/11/05/00/19/camera-6769730_960_720.png', alt: 'drone'}
  ]
}
