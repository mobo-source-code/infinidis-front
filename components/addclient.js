import AddClientForm from "./addclientform"


const AddClientComponent = () => {

    return (
        <div className="flex flex-col p-8 space-y-5">
            <h1 className="font-bold text-3xl font-source text-title px-2">
                Ajouter client
            </h1>
            <p className="text-md font-source text-gray-900 w-2/5 px-2">
                Ajouter vos clients manuellement ou importez vos clients depuis excel
            </p>
            <AddClientForm />
        </div>
    )
}

export default AddClientComponent;