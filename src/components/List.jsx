function List({ listData }) {
    return (
        <>
            <ul className="pl-6 mb-4">

                {listData.map(function (object, i) {
                    return <li key={i} className="list-disc ">{object}</li>;
                })}
            </ul>
        </>
    );
}

export default List;