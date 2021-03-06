//var skillName;
$('#add-skill-form').submit( function (e) {
  e.preventDefault();
  skillName = $('#skills').val();
  skillName = skillName.trim();
  img_nm = skillName.toLowerCase();
  var skillTab = $('#showskills');
  var newSkill = $(`<div class="skillset" id="skilldiv-${skillcount}"></div>`);
  $('#skills').val('');
  $(".suggestions").remove();
  if( skillName.length != 0){
    if(check_added_skills(img_nm)){
      added_skill.push(img_nm);
      skillTab.append(newSkill);

      if(check_skill(img_nm)){
        url = `../images/Skill Icons/${skillName}.png`;
      }
      else {
        img_nm = img_nm[0];
        url = `../images/Alphabets Icons/${img_nm}.jpeg`;
      }

      var newHiddenInputDiv = $(`<div id="hiddendiv-${skillcount}"></div>`);
      var input1 = $(`<input type="hidden" id="skill-${skillcount}" name="skill" value="${skillName}" />`);
      var input2 = $(`<input type="hidden" id="skillprof${skillcount++}" name="skillprof" />`);
      $(newHiddenInputDiv).append(input1);
      $(newHiddenInputDiv).append(input2);
      $('#Skill-form').append(newHiddenInputDiv);

      $('.skillset:last').fadeIn(500);
      $('.skillset:last').load('../pages/skill.html');
    }
  }
});
$(document.body).on('click', '#skill-remove', function() {
  var sk = $(this).siblings('#skill-name').text();
  $(this).parent().slideUp(500, function () {
    var count = $(this).attr('id').substr(9);
    $(`#hiddendiv-${count}`).remove();
    $(this).remove();
  });

  sk = sk.toLowerCase();
  var idx = added_skill.indexOf(sk);
  added_skill.splice(idx, 1);
});
