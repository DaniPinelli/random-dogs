const getDog = async (breedId) => {

    const url = !breedId || breedId === 0
        ? "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fno-image-available-sign-vector-id922962354%3Fk%3D20%26m%3D922962354%26s%3D612x612%26w%3D0%26h%3Df-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fno-image-available&tbnid=r_eCQ0GQ0UO8ZM&vet=12ahUKEwi41rbS3qf2AhXJOLkGHbfgDYwQMygHegUIARDtAQ..i&docid=H0F39Afu_F6SBM&w=612&h=612&q=no%20image&ved=2ahUKEwi41rbS3qf2AhXJOLkGHbfgDYwQMygHegUIARDtAQ"
        : "https://api.thedogapi.com/v1/images/search?breed_id=" + breedId


    const res = await fetch(url);
    const [data] = await res.json();

    const { url: image, breeds: [breed] } = data;

    if (!breed) {
        breed = {
            id: 0,
            name: "No Dog"
        }
    }

    const dog = {
        image,
        breed
    }

    return dog;
}

export default getDog