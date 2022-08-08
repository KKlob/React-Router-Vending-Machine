import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Snack from './Snack';
import './VendingMachine.css';
import { v4 as uuid } from 'uuid';

const VendingMachine = () => {

    const snacks = [
        {
            "name": "Cracker Jacks",
            "cost": "$2.50",
            "desc": "Molasses-flavored, caramel-coated popcorn and peanuts",
            "code": "cj",
            "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.ca%2Fimages%2FEnlarge%2F424%2F461%2F6000202424461.jpg&f=1&nofb=1"
        },
        {
            "name": "Ritz Crackers",
            "cost": "$1.50",
            "desc": "Disc-shaped, lightly salted crackers",
            "code": "rc",
            "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.myshopmatic.com%2Fimages%2FM95NQ1%2FnGzpgONEXP.jpg&f=1&nofb=1"
        },
        {
            "name": "Honey Bun",
            "cost": "1.00",
            "desc": "Fried yeast pastry that continas honey and a swirl of cinnamon in the dough, glazed with icing",
            "code": "hb",
            "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.secretmenus.com%2Fwp-content%2Fuploads%2F2017%2F12%2Fjumbo-honey-buns.jpeg&f=1&nofb=1"
        }
    ];

    snacks.forEach(snack => {
        snack.id = uuid();
    });

    function Home() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Vending Machine</th>
                        </tr>
                    </thead>
                    <tbody>
                        {snacks.map(snack => (
                            <tr key={snack.id}>
                                <td><img src={snack.img} alt={snack.desc} /></td>
                                <td><Link to={"/" + snack.code}>{snack.name}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            {snacks.map((snack, ind) => (
                <Route exact path={"/" + snack.code} element={<Snack snack={snack} />} key={ind} />
            ))}
        </Routes>
    )
}

export default VendingMachine;