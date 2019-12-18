import delay from 'delay'

const doWithItemsOrElse = (funcWithItems, func) => {
    const itemsInStorage = localStorage.getItem("savedItems");
    if (!itemsInStorage) return func()
    return funcWithItems(itemsInStorage)
}

const getAllItems = async () => {
    await delay(1000);

    return doWithItemsOrElse((itemsInStorage) => ({
        status: 200,
        items: itemsInStorage.split(", ").map((item, index) => ({
            id: index,
            value: item
        }))
    }), () => ({
        status: 200,
        items: []
    }));
}

const addItem = async (newItem) => {
    await delay(500);

    return doWithItemsOrElse(itemsInStorage => {
        localStorage.setItem("savedItems", `${itemsInStorage}, ${newItem}`);
        return {
            status: 200
        }
    }, () => {
        localStorage.setItem("savedItems", newItem);
        return {
            status: 200
        }
    });
}

const deleteItem = async (itemToDelete) => {
    await delay(500);

    return doWithItemsOrElse(itemsInStorage => {
        const itemsInStorageArray = itemsInStorage.split(", ");
        console.log(itemToDelete)
        if (itemsInStorageArray.some((item) => item == itemToDelete)) {
            localStorage.setItem("savedItems", itemsInStorageArray.filter(item => item != itemToDelete).join(", "));
            return {
                status: 200
            };
        }

        return Promise.reject({
            status: 400,
            message: "The item is not on storage"
        });
    }, () => Promise.reject({
            status: 400,
            message: "No items to delete on storage"
        }));
}

export { getAllItems, addItem, deleteItem }