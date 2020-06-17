// Import the jobs from the Database
import jobs from "../assets/database/listaDeVagas.js";
// Loop through the Jobs using map
jobs.map(({ id, vaga, descrição, email, assunto, imagem }) => {
  // $ Creation of Icons Grid
  // Select the Container of the Jobs
  const jobsDiv = document.querySelector(`.jobsDiv`);
  // Create the Job
  const jobItem = document.createElement(`div`);
  jobItem.setAttribute(`class`, `col-md-6 col-lg-4 mb-5`);
  // Create the Job Modal
  const jobModal = document.createElement(`div`);
  jobModal.setAttribute(`class`, `jobs-item mx-auto`);
  jobModal.setAttribute(`data-toggle`, `modal`);
  jobModal.setAttribute(`data-target`, `#jobsModal${id}`);
  // -> Append Job Modal to JobItem
  jobItem.appendChild(jobModal);
  // Create the Job Caption
  const jobCaption = document.createElement(`div`);
  jobCaption.setAttribute(
    `class`,
    `jobs-item-caption d-flex align-items-center justify-content-center h-100 w-100`
  );
  // -> Append Job Caption to Job Modal
  jobModal.appendChild(jobCaption);
  // Create Job Icon Container
  const jobIconContainer = document.createElement(`div`);
  jobIconContainer.setAttribute(
    `class`,
    `jobs-item-caption-content text-center text-white`
  );
  // -> Append JobIconContainer to Job Caption
  jobCaption.appendChild(jobIconContainer);
  // Create the Job Icon
  const jobIcon = document.createElement(`i`);
  jobIcon.setAttribute(`class`, `fas fa-plus fa-3x`);
  // -> Append the Icon to it's container
  jobIconContainer.appendChild(jobIcon);
  // Create the Image Preview
  const jobImage = document.createElement(`img`);
  jobImage.setAttribute(`class`, `img-fluid`);
  jobImage.setAttribute(`src`, imagem);
  jobImage.setAttribute(`alt`, ``);
  // -> Append the Image to the Job Modal
  jobModal.appendChild(jobImage);
  // $ After the Creation of the Grid, Append the JobItem to the JobsDiv
  jobsDiv.appendChild(jobItem);
  // $ Creation of MetaData
  // Select the Container of the Jobs
  const jobsDivModal = document.querySelector(`.jobsModalDiv`);
  // Create the modal Container
  const modalItem = document.createElement(`div`);
  modalItem.setAttribute(`class`, `modal${id}`);
  // Create the modal style
  const modalStyle = document.createElement(`div`);
  modalStyle.setAttribute(`class`, `jobs-modal modal fade`);
  modalStyle.setAttribute(`id`, `jobsModal${id}`);
  modalStyle.setAttribute(`tabindex`, `-1`);
  modalStyle.setAttribute(`role`, `dialog`);
  modalStyle.setAttribute(`aria-labelledby`, `jobsModal${id}Label`);
  modalStyle.setAttribute(`aria-hidden`, `true`);
  // -> Append the modalStyle to it's container
  modalItem.appendChild(modalStyle);
  // Create the Modal Document
  const modalDocument = document.createElement(`div`);
  modalDocument.setAttribute(`class`, `modal-dialog modal-xl`);
  modalDocument.setAttribute(`role`, `document`);
  // -> Append the modalDocument to the ModalStyle
  modalStyle.appendChild(modalDocument);
  // Create the Modal Content Container
  const modalContent = document.createElement(`div`);
  modalContent.setAttribute(`class`, `modal-content`);
  // -> Append the modalContent to the ModalDocument
  modalDocument.appendChild(modalContent);
  // Create the Close Button
  const modalCloseButton = document.createElement(`button`);
  modalCloseButton.setAttribute(`class`, `close`);
  modalCloseButton.setAttribute(`type`, `button`);
  modalCloseButton.setAttribute(`data-dismiss`, `modal`);
  modalCloseButton.setAttribute(`aria-label`, `Close`);
  // -> Append the Close Button to the Content
  modalContent.appendChild(modalCloseButton);
  // Create the Close Span
  const modalCloseSpan = document.createElement(`span`);
  modalCloseSpan.setAttribute(`aria-hidden`, `true`);
  // -> Append the closeButton to the modalStyle
  modalCloseButton.appendChild(modalCloseSpan);
  // Create the Close Icon
  const modalCloseIcon = document.createElement(`i`);
  modalCloseIcon.setAttribute(`class`, `fas fa-times`);
  // -> Append the closeIcon to the closeButton
  modalCloseSpan.appendChild(modalCloseIcon);
  // Create the body of the Modal
  const modalBody = document.createElement(`div`);
  modalBody.setAttribute(`class`, `modal-body text-center`);
  // -> Append the Body to the Content
  modalContent.appendChild(modalBody);
  // Create the BodyContainer to hold all information about the jobs
  const modalBodyContainer = document.createElement(`div`);
  modalBodyContainer.setAttribute(`class`, `container`);
  // -> Append the Container to the Body
  modalBody.appendChild(modalBodyContainer);
  // Create the BodyRow
  const modalBodyRow = document.createElement(`div`);
  modalBodyRow.setAttribute(`class`, `row justify-content-center`);
  // -> Append the Row to the Container
  modalBodyContainer.appendChild(modalBodyRow);
  // Setup the Body Style
  const modalBodyStyle = document.createElement(`div`);
  modalBodyStyle.setAttribute(`class`, `col-lg-8`);
  // -> Append the BodyStyle to the Row
  modalBodyRow.appendChild(modalBodyStyle);
  // Create the ModalTitle
  const modalBodyTitle = document.createElement(`h2`);
  modalBodyTitle.setAttribute(
    `class`,
    `jobs-modal-title text-secondary text-uppercase mb-0`
  );
  modalBodyTitle.setAttribute(`id`, `jobsModal${id}Label`);
  modalBodyTitle.innerHTML = vaga;
  // -> Append the Title to the BodyStyle
  modalBodyStyle.appendChild(modalBodyTitle);
  // Create the Icon Divider
  const modalIconDivider = document.createElement(`div`);
  modalIconDivider.setAttribute(`class`, `divider-custom`);
  // -> Append the Icon Divider to the BodyStyle
  modalBodyStyle.appendChild(modalIconDivider);
  // Create the Icon Lines
  const firstLine = document.createElement(`div`);
  const secondLine = document.createElement(`div`);
  firstLine.setAttribute(`class`, `divider-custom-line`);
  secondLine.setAttribute(`class`, `divider-custom-line`);
  // Create the Icon
  const iconDiv = document.createElement(`div`);
  const iconContent = document.createElement(`i`);
  iconDiv.setAttribute(`class`, `divider-custom-icon`);
  iconContent.setAttribute(`class`, `fas fa-star`);
  // -> Append the firstLine Icon Div and Content and after it Add the Second Line
  modalIconDivider.appendChild(firstLine);
  modalIconDivider.appendChild(iconDiv);
  iconDiv.appendChild(iconContent);
  modalIconDivider.appendChild(secondLine);
  // Create the Image
  const modalBodyImage = document.createElement(`img`);
  modalBodyImage.setAttribute(`class`, `img-fluid rounded mb-5`);
  modalBodyImage.setAttribute(`src`, imagem);
  modalBodyImage.setAttribute(`alt`, ``);
  // -> Append the Image to the BodyStyle
  modalBodyStyle.appendChild(modalBodyImage);
  // Create the BodyDescription
  const modalBodyDescription = document.createElement(`p`);
  modalBodyDescription.setAttribute(`class`, `mb-5`);
  modalBodyDescription.innerHTML = descrição;
  // -> Append the Description to the BodyStyle
  modalBodyStyle.appendChild(modalBodyDescription);
  // Create the Call to Action
  const modalBodyCallToAction = document.createElement(`a`);
  modalBodyCallToAction.setAttribute(`class`, `btn btn-primary`);
  modalBodyCallToAction.setAttribute(`role`, `button`);
  modalBodyCallToAction.setAttribute(
    `href`,
    `mailto:${email}?subject=${assunto}`
  );
  modalBodyCallToAction.innerHTML = `Candidatar!`;
  // -> Append the Call to Action to the BodyStyle
  modalBodyStyle.appendChild(modalBodyCallToAction);
  // $ After the Creation of the modalItem append it to the jobsDivModal
  console.log(modalItem);
  jobsDivModal.appendChild(modalItem);
});
