document.addEventListener('click', documentClick);
function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
  }
}


const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalButton");
const span = document.getElementsByClassName("close")[0];
const body = document.body;

btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden";
}

span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
}


const images = document.querySelectorAll(".zoomable-image");
const zoomedImageContainer = document.createElement("div");
zoomedImageContainer.id = "zoomedImageContainer";

const zoomedImage = document.createElement("img");
zoomedImage.id = "zoomedImage";
zoomedImageContainer.appendChild(zoomedImage);
document.body.appendChild(zoomedImageContainer);

images.forEach(function(image) {
  image.onclick = function() {
    zoomedImage.src = image.src; 
    zoomedImageContainer.style.display = "block"; 
    document.body.style.overflow = "hidden"; 
  }
});

zoomedImageContainer.onclick = function() {
  zoomedImageContainer.style.display = "none"; 
  document.body.style.overflow = "auto"; 
}


$(window).on('load resize', function() {
  if ($(window).width() < 720) {
    $('#items:not(.slick-initialized)').slick({
      dots: true,
    });
  } else {
    $("#items.slick-initialized").slick("unslick");
  }

  if ($(window).width() > 720) {
    $('.center:not(.slick-initialized)').slick({
      centerMode: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1355,
          settings: {
            centerMode: true,
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1173,
          settings: {
            centerMode: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1010,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        },
      ]
    });
  } else {
    $(".center.slick-initialized").slick("unslick");
  }
});


function openModal() {
  const modal = document.getElementById('myModal');
  if (modal) {
      modal.style.display = 'block';
  }
}

function setupModalButtons() {
  const parentElement = document.querySelector('.menu-slider.center');
  if (!parentElement) return;

  parentElement.removeEventListener('click', handleModalButtonClick);

  parentElement.addEventListener('click', handleModalButtonClick);
}

function handleModalButtonClick(event) {
  if (event.target.classList.contains('open-modal-btn')) {
      openModal();
  }
}

setupModalButtons();

