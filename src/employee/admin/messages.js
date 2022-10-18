import React, { useContext, useState } from 'react';  

// Components
import NavBar from '../../components/navbar/navbar-employee'
import Footer from '../../components/footer/footer'
import Modal from '../../components/modal/Modal';
import { Button } from '../../components/button/button';
import { ModalTest } from '../../components/modal/ModalTest';
import useRank from '../../hooks/useRank';
import { InputFloating } from '../../components/input/inputfloating';
import { CreateRank, UpdateRank } from '../../context/RankContext';
import { Table } from '../../components/Table/Table';
import { TableHead } from '../../components/Table/TableHead';
import { TableItem } from '../../components/Table/TableItem';
import { BadgeRank } from '../../components/badge/Badge';
import { SubMenu } from './submenu';
import { EditSettings } from '../../components/modal/EditSetting';
import ListBox from '../../components/ListBox/ListBox';

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
    const [modalCreate, setModalCreate] = useState(false);
    const [selectRank, setSelectRank] = useState();

    return (
        <>  

            <ModalCreateRank show={modalCreate} close={()=>setModalCreate(false)}  />

            <div className={`h-full`}>

                <div className='grid grid-cols-5 w-full h-full'>

                    <div className='col-span-4 grid grid-cols-13'>

                        <div className='col-span-2 h-full bg-gray-100'>
                            <SubMenu /> 
                        </div>

                        <div className='col-span-11 h-full'>
                            <div className='border border-y-transparent h-full'>
                                <div className='border-b h-4.5rem flex items-center justify-between px-5'>
                                    <div className='text-xl font-bold text-night text-left'>Liste des rôles</div>
                                    <a onClick={()=>setModalCreate(true)} className='cursor-pointer text-md hover:bg-gray-100/80 rounded-lg px-4 py-2 font-semibold text-night text-left underline'>Ajouter un rôle</a>
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
    const { Rank, setRank } = useRank();

    return (
        <div className='w-full pt-6'>
            <Table>
                <TableHead>
                    <th><input type="checkbox" className="checkbox checkbox-xs" /></th>
                    <th>Nom</th>
                    <th>Badge</th>
                    <th>Power</th>
                    <th>Supprimable</th>
                    <th>Action</th>
                </TableHead>
                {Rank && Rank.map(u =>
                    <TableItem>
                        <td>
                            <input type="checkbox" className="checkbox checkbox-xs" />
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            {u.name ? u.name : ""}
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            <BadgeRank rank={u} />
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            {u.power ? u.power : ""}
                        </td>
                        <td className='text-sm text-night font-semibold'>
                            {!u.deletable ? u.deletable+"" : "true"}
                        </td>
                        <td>
                            <button onClick={()=>setSelectRank(u)} className='w-fit px-4 py-1 rounded-lg border border-black text-black text-sm font-medium hover:bg-gray-100/80'> 
                                Modifier
                            </button>
                        </td>
                    </TableItem>
                )}
            </Table>
        </div>
    )
}

const SideDetails = ({selectRank}) => {
    const { Rank, setRank } = useRank();

    const [testname, setTestname] = useState();

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
                                        <InputFloating defaultValue={selectRank.name} onChange={(e)=>setTestname(e.target.value)} id={'name'} type={'text'} name={'Nom'} placeholder={selectRank.name} />
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
                                        <InputFloating defaultValue={selectRank.power} id={'power'} type={'text'} name={'Power'} placeholder={selectRank.power} />
                                    </div>
                                </EditSettings>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-4 w-full '>
                            <Button  theme={'red'} size='full'>Supprimer</Button>
                            <Button theme={'cyan'} size='full'>Sauvegarder</Button>
                        </div> 
                    </div>
                }
            </>
    )
}

const ModalCreateRank = ({show, close}) => {
    const { Rank, setRank } = useRank();

    const [name, setName] = useState('Sans-Titre')
    const [deletable, setDeletable] = useState(true)
    const [color, setColor] = useState('#6b72800')
    const [power, setPower] = useState(1)

    const createRank = () => {
        CreateRank({Rank, setRank}, name, deletable, color, power);
        close()
    }

    return (
        <>
            <ModalTest show={show} close={close}>
                <div className='h-10rem bg-cover' style={{backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")`}} />
                    <div className='border-b' />
                <div className="p-5">
                    <div className='text-3xl font-semibold text-night text-left'>Créer un rôle</div>
                    <div className='pt-2 pb-6 text-md font-normal text-gray-500 text-left'>Communiquez avec vos correspondants via la plateforme afin de sécuriser et de protéger vos messages.</div>

                    <InputFloating onChange={(e)=>setName(e.target.value)} name={'Nom du rôle'} placeholder={'Nom du rôle'} />
                    <input checked={deletable} type={'checkbox'} onChange={()=>setDeletable(!deletable)} className='checkbox checkbox-sm' />
                    <input type={'color'} onChange={(e)=>setColor(e.target.value)} className='border px-2 py-1 border-black' placeholder='Color' />
                    <InputFloating onChange={(e)=>setPower(e.target.value)} name={'Puissance du rôle'} placeholder={'Puissance du rôle'} />

                    <div className='pt-8 flex justify-end'>
                        <Button onClick={createRank} theme={'green'}>Continuer</Button>
                    </div>
                </div>
            </ModalTest>
        </>
    )
}