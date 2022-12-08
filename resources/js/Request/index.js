

export const request = {};

request.get = async (path, id = '') => {

    let response = await fetch(path + id)
    if (response.status === 200 || response.status === 201 ) {
        return  await response.json();
    } else {
        let data = await response.json();

      return false;
    }
}

request.getAll = (path) => {


    return new Promise((resolve, reject) => {

        fetch(path).then(res => {

            if (res.status === 200 || 201) {

                resolve(res.json())

            } else {
                resolve(false)
            }
        })

    })
}






