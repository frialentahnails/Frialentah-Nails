
function scrollToBooking(){ document.getElementById('booking').scrollIntoView({behavior:'smooth'}); }
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  // gather values (in real site we'd POST to backend)
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const service = this.service.value;
  const start = this.start_at.value;
  if(!name||!email||!phone||!service||!start){ alert('Please complete all fields'); return; }
  // Show confirmation/QR area
  document.getElementById('confirmation').classList.remove('hidden');
  window.location.hash = '#confirmation';
});
function copyCashTag(){
  navigator.clipboard.writeText('$heather5366').then(()=>alert('Copied $heather5366 to clipboard'));
// fallback
}