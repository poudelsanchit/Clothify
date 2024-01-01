import React from "react";
import Offer from "../Components/Swipers/Offer";
import Nissbody from "../Components/NisseProduct/Nissbody";
import HomeShop from "../Components/HomeShop";

const Men = () => {
  //   const data = [
  //     {
  //       id: 1,
  //       name: "Air Jordan 1 High OG Royal Reimagined",
  //       image:
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21692e08-697b-4bda-9b9d-fea249a11439/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //       price: "$180",
  //       productId: "fcdcc8df34543",
  //       qty: 1,
  //       defaultSize: 0,
  //       sizes: [40.5, 41, 42, 43, 43.5, 44, 44.5, 45, 46],
  //       imgsides: [
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21692e08-697b-4bda-9b9d-fea249a11439/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be4275d7-3a88-4592-a9d7-61d615e20ff1/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/636de0b6-3da1-4de6-866b-5a3e3703e737/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6933ee32-732d-48af-8bf2-d4f32f7d133b/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a692d71c-15f7-4efa-9028-7d433cf3cd7a/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/40d69a04-d567-42b5-a336-279e99591dab/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7ad8f3a4-8b4f-41f6-8206-6c615f9277a2/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //       ],
  //       color: [
  //         {
  //           color: "blue",
  //           url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21692e08-697b-4bda-9b9d-fea249a11439/air-jordan-1-high-og-royal-reimagined-mens-shoes-gX9FS0.png",
  //         },
  //         {
  //           color: "Gold",
  //           url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aa1b974-a557-4b86-90ea-f56dab700262/air-jordan-1-retro-high-og-womens-shoes-SsFGW3.png",
  //         },
  //       ],
  //       reviews: [
  //         {
  //           name: "Riya T.",
  //           image:
  //             "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //           date: "Yesterday",
  //           comments:
  //             "Excellent Running shoes. It turns very Sharply on the foot",
  //           stars: 5,
  //           likes: 4,
  //           dislike: null,
  //           replies: [
  //             {
  //               active: false,
  //               name: "Rojan B.",
  //               image:
  //                 "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //               comments: "I'm glad you liked them!",
  //               likes: 4,
  //               dislike: 0,
  //             },
  //           ],
  //         },
  //         {
  //           name: "Sanchit P.",
  //           image:
  //             "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //           date: "Yesterday",
  //           comments:
  //             "Excellent Running shoes. It turns very Sharply on the foot",
  //           replies: [
  //             {
  //               active: true,
  //               name: "Sujan B.",
  //               image:
  //                 "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //               comments: "I'm glad you liked them!",
  //               likes: 4,
  //               dislike: 0,
  //               "Reply-replies": [
  //                 {
  //                   active: false,
  //                   name: "Sujan B.",
  //                   image:
  //                     "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //                   comments: "I'm glad you liked them!",
  //                   likes: 4,
  //                   dislike: 0,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: 'Air Jordan 1 Mid SE',
  //       image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2fa8af30-52de-4827-bc90-930096137756/air-jordan-1-mid-se-mens-shoes-TlHVHn.png',
  //       price: '$135',
  //       productId: 'fcdcc8df03433',
  //       qty: 1,
  //       defaultSize: 0,
  //       sizes: [
  //         40.5,
  //         41,
  //         42,
  //         43,
  //         43.5,
  //         44,
  //         44.5,
  //         45,
  //         46
  //       ],
  //       imgsides: [
  //         'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2fa8af30-52de-4827-bc90-930096137756/air-jordan-1-mid-se-mens-shoes-TlHVHn.png',
  //         'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3a20d360-314f-4121-9e43-000bb172566c/air-jordan-1-mid-se-mens-shoes-TlHVHn.png',
  //         'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5c6b77ea-cd59-4fa8-9913-7b9df839d283/air-jordan-1-mid-se-mens-shoes-TlHVHn.png',
  //         'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/913cae3a-6d7a-439a-8c71-051d85f7d433/air-jordan-1-mid-se-mens-shoes-TlHVHn.png',
  //         'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b4f6431d-f4e6-40fb-b063-5c7a1079c353/air-jordan-1-mid-se-mens-shoes-TlHVHn.png',
  //         'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3cf8f38c-a410-454b-85d1-3e675d847419/air-jordan-1-mid-se-mens-shoes-TlHVHn.png'
  //       ],
  //       color: [
  //         {
  //           color: 'blue',
  //           url: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2fa8af30-52de-4827-bc90-930096137756/air-jordan-1-mid-se-mens-shoes-TlHVHn.png'
  //         },
  //         {
  //           color: 'blue',
  //           url: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b75348f0-33f7-4c4d-8630-4926936c07f2/air-jordan-1-mid-se-mens-shoes-TlHVHn.png'
  //         }
  //       ],
  //       reviews: [
  //         {
  //           name: 'Suman K.',
  //           image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //           date: 'Yesterday',
  //           comments: 'Excellent Running shoes. It turns very Sharply on the foot',
  //           stars: 5,
  //           likes: 4,
  //           dislike: null,
  //           replies: [
  //             {
  //               active: false,
  //               name: 'Rojan B.',
  //               image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //               comments: 'I\'m glad you liked them!',
  //               likes: 4,
  //               dislike: 0
  //             }
  //           ]
  //         },
  //         {
  //           name: 'Sanchit P.',
  //           image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //           date: 'Yesterday',
  //           comments: 'Excellent Running shoes. It turns very Sharply on the foot',
  //           replies: [
  //             {
  //               active: true,
  //               name: 'Sujan B.',
  //               image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //               comments: 'I\'m glad you liked them!',
  //               likes: 4,
  //               dislike: 0,
  //               'Reply-replies': [
  //                 {
  //                   active: false,
  //                   name: 'Sujan B.',
  //                   image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //                   comments: 'I\'m glad you liked them!',
  //                   likes: 4,
  //                   dislike: 0
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ];
  // //some
  //   console.log(data.some((item)=>item.id=== 2))
  // console.log(data.filter((item)=> item.id!==1))

  return (
    <div className=" p-0 flex flex-col items-start  w-screen">
      <Offer />
      <Nissbody />
      <HomeShop />
    </div>
  );
};

export default Men;
