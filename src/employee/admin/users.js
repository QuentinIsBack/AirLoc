import React, { useEffect, useState } from 'react';  

// Components
import NavBar from '../../components/navbar/navbar-employee'
import Footer from '../../components/footer/footer'
import { Button } from '../../components/button/button';
import { ModalTest } from '../../components/modal/ModalTest';
import useRank from '../../hooks/useRank';
import { InputFloating } from '../../components/input/InputFloating';
import { GetRankByPower, UpdateRank } from '../../context/RankContext';
import { Table } from '../../components/Table/Table';
import { TableHead } from '../../components/Table/TableHead';
import { TableItem } from '../../components/Table/TableItem';
import { BadgeRank, BadgeRankUser } from '../../components/badge/Badge';
import { SubMenu } from './submenu';
import { EditSettings } from '../../components/modal/EditSetting';
import ListBox from '../../components/ListBox/ListBox';
import RankDataServices from '../../services/RankData.services';
import UserDataServices from '../../services/UserData.services';

export default function Page() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <div>  
                    <NavBar />
                </div>
                <div className="flex-grow">
                    {Body()}
                </div>
                <div>
                    <Footer formatage={'sticky'} /> 
                </div>
            </div>
        </>
    )
}

function Body() {

    const [selectRank, setSelectRank] = useState();

    return (
        <>  

            <div className={`h-full`}>

                <div className='grid grid-cols-5 w-full h-full'>

                    <div className='col-span-4 grid grid-cols-13'>

                        <div className='col-span-2 h-full bg-gray-100'>
                            <SubMenu /> 
                        </div>

                        <div className='col-span-11 h-full'>
                            <div className='border border-y-transparent h-full'>
                                <div className='border-b h-4.5rem flex items-center justify-between px-5'>
                                    <div className='text-xl font-bold text-night text-left'>Liste des utilisateurs</div>
                                    <button className='cursor-pointer text-md hover:bg-gray-100/80 rounded-lg px-4 py-2 font-semibold text-night text-left underline'>Ajouter un utilisateur</button>
                                </div>
                                <div className='flex flex-col items-center justify-center p-5'>
                                    {ListSearch({setSelectRank})}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-span-1 h-full'>
                        <div className='border border-transparent h-full flex flex-col justify-start'>
                            <div className='border-b h-4.5rem flex items-center justify-start px-5'>
                                <div className='text-xl font-bold text-night text-left'>Détails</div>
                            </div>
                            <div className='flex-grow'>
                                {SideDetails({selectRank})}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
} 
 
const ListSearch = ({setSelectRank}) => {
    const [ Users, setUsers ] = useState()


    useEffect(()=> {
        UserDataServices.getAllUsers({setUsers})
    }, [])


    return (
        <div className='w-full pt-6'>
            <Table>
                <TableHead>
                    <th><input type="checkbox" className="checkbox checkbox-xs" /></th>
                    <th>Identité</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Rôles</th>
                    <th>Action</th>
                </TableHead>
                {Users && Users.map((u, index) =>
                    <TableItem key={index}>
                        <td>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            {u.lastname ? u.lastname : undefined} {u.firstname ? u.firstname : undefined}
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            {u.email ? u.email : undefined}
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            {u.phone ? u.phone : undefined}
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            <BadgeRankUser id={ u.rank } />
                        </td>
                        <td>
                            <button className='w-fit px-4 py-1 rounded-lg border border-black text-black text-sm font-medium hover:bg-gray-100/80'> 
                                Modifier
                            </button>
                        </td>
                    </TableItem>
                )}
            </Table>
        </div>
    )
}

const SideDetails = ({selectRank, setModalDelete}) => {
    const { Rank, setRank } = useRank();

    const [ testname ] = useState();

    const list = [
        { name: 'Wade Cooper', color: "" },
        { name: 'Arlene Mccoy', color: "" },
        { name: 'Devon Webb', color: "" },
        { name: 'Tom Cook', color: "" },
        { name: 'Tanya Fox', color: "" },
        { name: 'Hellen Schmidt', color: "" },
      ]
    const [selected, setSelected] = useState(list[0])

    return (
            <>
                {selectRank &&
                    <div className='flex flex-col items-center justify-between p-5 h-full'>
                        <div className='flex-grow w-full '>
                            <div className='w-full flex flex-col'>
                                <div className='pb-4 text-xl font-semibold text-black'>Informations</div>

                                <EditSettings
                                    name={"Nom"} 
                                    message={selectRank.name}
                                    onClick={()=>UpdateRank({Rank, setRank}, selectRank, "name", testname)}
                                    description={"C'est le nom qui figure sur votre document d'identité, à savoir votre permis ou votre passeport, par exemple."}
                                    theme={'cyan'}
                                >
                                    <div className='flex space-x-5'>
                                        <InputFloating id={'rankname'} type={'text'} defaultValue={selectRank.name} placeholder={'Nom'} />  
                                    </div>
                                </EditSettings>

                                <div className='border-b my-3' />

                                <EditSettings
                                    name={"Couleur"} 
                                    message={<BadgeRank rank={selectRank} />}
                                    description={"C'est le nom qui figure sur votre document d'identité, à savoir votre permis ou votre passeport, par exemple."}
                                    theme={'cyan'}
                                >
                                    <div className='flex space-x-5'>
                                        <ListBox 
                                            list={list}
                                            selected={selected}
                                            setSelected={setSelected}
                                        />
                                    </div>
                                </EditSettings>

                                <div className='border-b my-3' />

                                <EditSettings
                                    name={"Puissance"} 
                                    message={selectRank.power}
                                    description={"C'est le nom qui figure sur votre document d'identité, à savoir votre permis ou votre passeport, par exemple."}
                                    theme={'cyan'}
                                >
                                    <div className='flex space-x-5'>
                                        <InputFloating id={'rankpower'} type={'text'} defaultValue={selectRank.power} placeholder={'Power'} />  
                                    </div>
                                </EditSettings>
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-full space-y-2'>
                            <button className='text-red-500 text-xs font-medium underline'>Supprimer le rôle</button>
                            <div className='flex flex-row space-x-4 '>
                                <Button theme={'red'} size='full'>Supprimer</Button>
                                <Button theme={'cyan'} size='full'>Sauvegarder</Button>
                            </div>
                        </div> 
                    </div>
                }
            </>
    )
}
