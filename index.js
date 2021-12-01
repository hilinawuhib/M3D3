const fetchImage = async (query) => {
  try {
    response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization:
          "563492ad6f917000010000013e0f770e160941b08a1bfcaa8e7cabc6 ",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let Images = data["photos"];

        const photosContainer = document.getElementById("photos");
        photosContainer.innerHTML = "";

        Images.forEach((element) => {
          let anotherInnerHtml = `<div class=" cards col-md-3 mt-5">
                <div class="card mb-3 shadow-sm">
                  <img src="${element.src.medium}">
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-danger"
                         onclick='hide(event)' class="btn btn-sm"
                        >
                         Hide
                        </button>
                      </div>
                      <small class="text-muted">${element.id}</small>
                    </div>
                  </div>
                </div>
              </div>`;

          photosContainer.innerHTML += anotherInnerHtml;
        });
      });
  } catch (e) {
    console.log(e);
  }
};
const hide = (Images) => Images.target.closest(".cards").remove();
