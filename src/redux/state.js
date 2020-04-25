let rerenderEntireTree = () => {
    console.log('state changed!')
}

let state = {
    profilePage: {

        posts: [
            { id: 1, message: "Hi, how are you?", likes: 15 },
            { id: 2, message: "It's my first post", likes: 20 }
        ],

        newPostText: "yo"
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Vlad", userpic: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAPDhAPDw8QDxAOEA8NDw8PDQ8PFREWGBUSFRUYHCggGBolGxUVITEhJSkrLi4uFx8/ODMsOiktLisBCgoKDg0OFxAQFS0dFxotLS0rKy0rKysrLS0rKystLSstLS03LSstLS0tLS0rLS0rNy0rLSsrKy0rLystLS0xN//AABEIAOoA1wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYHAQj/xABFEAACAgIAAwQHAwcKBQUAAAAAAQIDBBEFEiEGMUFRBxMiYXGBkUKSoRQjUrHBwtEyNENicnOCorKzFmNkdNIVFyQzU//EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/8QAIBEBAQACAgICAwAAAAAAAAAAAAECERIhAzEyURNBgf/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAruL8bx8VbvmlJrca4+1bL4RXh730AsQebcV7eZNm44sI0R8JzSsu+On7K+Gmctn5eRfv199tu/sznLk+Ue5fQi5xcwr2i/iVFfSy+mD/r2wj+tmpcaxH3ZWM/hfV/E8MeJHyX0NUsSPkjPyN4P0FTk1z/+ucJ/2JRl+o2n55pwE33F3iW5MNeryMiGvCN1ij9N6H5GcHtYPLMXtLxCv+n9Yv0bq4SX1SUvxLvB7eSWlk4/xnjy/cl/5GzOMuFdwCFwzi1GSt0WRnrvj1jOPxi+qJpaQAAAAAAAAAAAAAAAAAAAfJSSTbaSS223pJLxZw3aTjsr91Utxo7pPulb/CPu8fHyJyykVjjak9ou1/LurDacu6V/SUI+6C7pP393x8OHsi5Nzm3OUnuUpNylJ+bb7yY6tGqcThcrXaYyIsoGuUSRNGpmNR3AwcCRIUx2wxuxqCfXUfKIE2uBlqmlUGEscsaoH2yCJ23SpjXKElOuUoTj1UovUkdz2Y7R+v1TfqN6XR90bkvFeUvNfNeS5WcCJdW1qUW4yi1KMovUotdzTOmOekZY7esApOy/HFlV6npX16Vke7mXhNe5/g/kXZ6JduFmgAGsAAAAAAAAAAAAIPGMv1Vb09Tl7MfNN97+S/YZbqbbJvpSdpOIuxuiD9iL1Nr7cl9n4L9fwOdnDRPcDROs8mWVt29Mx1NK6yJHnEs5UGmeOGquyJGsLK+rRXXmprRJm7DRFlIm4KNFnSiVBkWBsUyWrCk1ZEuoxpdTXndGYpjsSjs1wkSKkGIOPlTxboX198X7UfCcH/Ki/ivx0epY18bIQsg9wnFTi/NNbR5rn4+0dH6PM7mqsx5P2qJ7j/dz21/mU/qjv4sv05eTH9usAB2cQAAAAAAAAAADmOOZHPa19mtcq+P2n+z5HR32qEZTfdGLk/kjiZWN7b6tttvzb7zj5r1p18U72zS2bo0EeqfUlu9aPO9DVKhEe6pG6eQiHk5PQCuzSmyWWGXdsq8iRcRUObLTA7inm+pbcOkbUxZIJg0ZeVXTFztkoRXjJ6JUscaemjZxGSfVHFZXamx/zeibj+nNcifwT6kfH7SXb1bDS8dFcKzlHX0yJ2Oyp4feppSXj1LKM9E1UT7Ipo09lLPU50Y/Zvrsq93NFc6f0jL6kHO4pCqLlOSil3ttJFNwftVRPLxuSabWRWt+GnJKXX4NlYbl2nPVj2sAHqeYAAAAAAAAAAFX2ku5aWvGcowX63+CZyMpl52zu16mHm5yfy0l+tnMWWnm8vyejx/FslfoweUQrLTU7CNL2nSySNfkEeVhossN0zZbYQ7ZGyciNazUo9jLDhlhWzZvwbNSRo6ZdIt9+lsp8nhm5etv9uaW0n/IqTelpeHelv3/ACOgwpLpzdU11J2RjRnFx1zRaSetb0ntb+aRMur2qzceeY3aLFnkPDVU3JPklY+VRT9y6trel113lzPg0XzJrx1p96ZY43ZjEhOViq1ZNqUpe1zNr3uXTv8AAu5uMY9V4dF02X5MsOuG/wCo8eOffPTmeHYnqXy+BP4lZywjKPXmel7nrqjOa3uTI0Zc0Jxfg1Yvc4vr+Gzmty+XwyN/Ndl2JRjt6nLlprivHr0372U74aoyVlDUoqSlGcOq1vvOt49wKGXTKiUpQUmpKcNNpp76p96PnAuDxoj6t9Yrot+SSX7DtLjx3vv6cry5a119vasW5WQhYu6cIzXwkt/tNpVdlrebFo/qxdfyhJwX4RRanWXcc71QAGsAAAAAAAAcV24t1dVHyq39Zv8AgczbaXXb+esqH/bw/wByw5ey082fyr0Yemc7TBWEWVh8VhjUqUzROZjKw0SmGNkpGiyQlM02SNGEmZ1PqjVszgax1mNduK+BLpymvEo8K32UTI2EWLlXazWyNfbshQtM/WGabtvT3FkKhbk4/pbj9Vr9pKqfRkWPR79+wxvpe4p+aRoyJ6N0pa5l5NtfB9V+DRU8SyNJmwr0jsBNyxIv/m26+HP/AB2dIUfYnH9Xg4qffKr1z8/zrdn7xeHqnp5r7AAawAAAAAAAB536TFy3US/SqlH7s9/vHGTsO69K9XsYtv6NllX34qS/22eeOZxznbtjemxzPimaXI+cxLUhzNLmYOZqcgNzmapyMXIwlI0bIs2wI8GboMC0wpE6LKzCZYRIqo2qR99YazCTAs8XctqPXp9DGyGjnsjjkqlywjJtvmlJOKT8l39yX62aP+MaktWws9b9n1XLLm9zWxxpyi/z565JfpRcX8Yv+El9Cktg7rK6Yv2rbIVJ+TnJR3+JnLicr1HVc64JuW7PZk3rWuV9fH8C07CYvruIU+KpVl8vhGPKv804lYztOVex1wUUoxWlFKKXkl3IyAPQ4AAAAAAAAAAA5b0lYvPg2SS26Z13L4KXLJ/KMpM8h5j37ieGr6bqJd1tVlTflzRa3+J+fYJr2ZLUotxkvKSemvqc846YVns+NgxZC3yUjU5H2bNDkGN3MYtmCkfdgbIMkQZEizfWwLLDfUtIlLjT00W0JEVUbUfMiOoyfuMHPXU0/wDqkH7Ot+5uMd/UNc5dJ9eZbTb7yw4PwOL3dKCT8PPRKa21P8mcorr0spf4c3UlZ3GZKvca4VRXT8/Yq/oluW/kVup1GrKiopnW+iTF3LLva/8Azpi/rKa/0HAzzZWLbjyrv35/A9e9HOC6cGptale5ZD+E/wCQ/uKBWE7TnenTgA7OQAAAAAAAAAAB4b21wvUZ+VDWo2TWTD3q1c0n9/nXyPcjzT0v8P08XLS8ZYs34ve51/TVn1JynSsb24NIxkjZWfZROLqh2oiWMnWxINyKZWHMZRsNaRqk9BidGRuhIgVWkiEwLCuZZ49u0UcJkzGu0TYqLytbIfFuDc65oLr46N2PaXGNNNE70r24KPBsuT5a3KK89tF3wvsjGv8AOZEpWz7/AG22l8NnW0pIjcWyVGDfuHK04yOfrwXlZVOJWn+cmoycfsVLrOXyin89eZ7nVWoxjGKSjFKMUu5RS0kcF6K+COMJ8RtXt5CcKE/s4/Nty/xtJ/CMfM789GE1HDK7oACkgAAAAAAAAAAHPdv8D1+BkxS9quH5RHS291PnaXvaUl8zoTGcFJOLW00015pgfn2jqkbnE+V47rcqn1dc5VN+bhJxf6jfynnd4hWwK/IgXFkSDkViUsVsEY2wJCgfZVlJU9m4s2U5ZIyKSpyKmuqKYuq7iZTacnDiDj0ltFli8Qi+5mWErq8bILvCvONx8xeZcYWcl4kWLldVO7SI/wCQvMtpxdtK6eptd6qScptPwfKml72inyuMQWlzL6nX+jHWRddkrrCmHqIy+z62epSXxUVH75mOPZll09FrgopRilGMUoxilpJJaSS8jIA9LgAAAAAAAAAAAAAAAA8T49TyZmZH/qbJ/flz/vEfRYdrP5/l/wB5H/agV6PPl7d56a5oiXRJsiNajI1XcnUz5DPXUy0UxFsqItuKmWUkaLIhinv4fF95XX4cI9Uuvmuj/AvryryI7el3suVNdh6N+wb4nj5F88iyjku9RT+bjZBtQjKUpJ6cl7SXSS7mXsvRFmb1HLxuX9Pkui/udf8AUegejzhSxOHYlWtSdSunvv57XztP3rm18joy9RG3k3CvQvFTU83OndDabrx6fUOX9Vzc5PT9yT8mj1HAwqqK4U0VwqqrXLCutKMYr4EgGsAAAAAAAAAAAAAAAAAAB432pe87Lf8AzdfSEV+wgJG/iM+fIyZ96lk3Nf2fWS1+Gj4oHmvt3npokiPbEnOBqnUGqyUep90SbKjBQNYjyRHtJlkSLajYK/IM8Hh7kubXtT9iG/N9EyTjYbtmo+He/gXltSr5H4QlCXyTTG2ae51wUUoruSSXwRkAd3EAAAAAAAAAAAAAAAAAAAjcSylTVbc/6OudmvPli3oknM+kTK9XhuO9ettrq/Hna+kGZbqNnt5vjVdFvq/F+bJSrMcdolRPNXoaPVmMqiYohxM23SulQYTxiy5BOHQbNOdyI6IdiLbOrHCeGysmpSXsrr8Stp0m8I4d6uG2val1ZjxGjcWvcy9lXpaK/Lh0ZO1aemcCzPX49FvjOqDl/b1qS+qZPOS9G+VzY9lL/obpcq8oTXN/qczrT1S7jzWaoADWAAAAAAAAAAAAAAAABy3pK4bbfgzePFztonHJjXHrKxQTU4xXjLklJpeLSXidSAPzvw3jsJpNSXUuaeIxfidf2w9FmLmzlkYs3hZUm5TcIKePdJvblOva1J9fai11bbUjzriHYLjWLv8A+OsmC+3h2xs6f2Jcs9/CLOV8bpM3QwzF5mxZK8zz6/iF2O9ZNd+O+7WTVZS9/wCNI208dT7pp/Bojgvm71ZCNkZ83ccRDjC/SJdHHlHx/Ezi3k6+OBF9ZMnVuMVqPQ4v/imPizVd2whHq3r4szjW8o7a25FXm5UUn1ObxOMZWX0wsXIyd9FKmqUqt++z+TH5tHXcB9G+XkNWcVsVFXf+SY0+a6X9Wy1dIeTUNvykip46m+SOg9FlDdV+T9i61Qr675o1c0XL7zkv8J25qxMaFUIVVQjXXXFQhCCUYQilpJJdyNp3k1HG3YADWAAAAAAAAAAAAAAAAAAAAAD5KKa00mn3p9UyozOyvDrnu7AwrJd3NPGplP73LsuABytvo54PLvwKY/3bsq/0SRG/9q+C9/5JLz/nmdr6etOzAHJ1ejbg8e7Brl/eTusX+aTLPC7J8OpalTgYVcl3ThjUqf3uXZcgD4lroj6AAAAAAAAAAAAAAAAAB//Z"},
            { id: 2, name: "Dalv",  userpic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqTQ1rIn7NZUFWRozX6CZ6uRhXZhLmDauJFgCUWUDnQQoRNXmH&usqp=CAU"},
            { id: 3, name: "Lavd", userpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4_WyXPKtaReIHWaRoLRYDJl1AKBdlrRal-QYBoRZBsoHJtDm7&usqp=CAU"},
            { id: 4, name: "Alvd", userpic:"https://vignette.wikia.nocookie.net/headsoccer/images/6/68/Kim_Jong_un_head.png/revision/latest?cb=20171016093415"},
        ],

        userpics: [
            {vlad: "../img/vlad.png"}
        ],

        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How're you?" },
            { id: 3, message: "Hey" },
        ],

        newMessageText: "yo"
    },

    sidebar: {
        
        friends: [
        { name: "Vlad", userpic: "data:image/jpeg;base64,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" },
        { name: "Dalv",  userpic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqTQ1rIn7NZUFWRozX6CZ6uRhXZhLmDauJFgCUWUDnQQoRNXmH&usqp=CAU"},
        { name: "Lavd", userpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4_WyXPKtaReIHWaRoLRYDJl1AKBdlrRal-QYBoRZBsoHJtDm7&usqp=CAU"},
    ]
    }
}

export const sendMessage = (dialogsMessage) => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText
    rerenderEntireTree(state)
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state
