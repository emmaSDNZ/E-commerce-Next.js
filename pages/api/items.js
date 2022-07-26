// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  res.status(200).json([
    {
      id:0,
      title: "Remera",
      price: "100",
      imag: 'http://localhost:3000/img/remera.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor"
    },
    
    {
      id:1,
      title: "Pantalon",
      price: "100",
      imag: 'http://localhost:3000/img/pantalon.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor"
    },
    {
      id:2,
      title: "Remera Azul",
      price: "100",
      imag: 'http://localhost:3000/img/remera-azul.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor"
    },
    {
      id:3,
      title: "Buzo con capucha",
      price: "100",
      imag: 'http://localhost:3000/img/buzo-con-capucha-ucc-negro.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor"
    },
    {
      id:4,
      title: "Campera",
      price: "100",
      imag: 'http://localhost:3000/img/campera.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor"
    },
    {
      id:5,
      title: "Pantalon",
      price: "100",
      imag: 'http://localhost:3000/img/pantalon.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor"
    }
  ])
}
 


