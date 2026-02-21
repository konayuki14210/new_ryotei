function showDay(dayNum) {
  // すべてのタブを非アクティブに
  document.querySelectorAll('.date-tab').forEach((tab) => {
    tab.classList.remove('active');
  });

  // すべてのコンテンツを非表示に
  document.querySelectorAll('.itinerary-content').forEach((content) => {
    content.classList.remove('active');
  });

  // クリックされたタブをアクティブに
  document.querySelectorAll('.date-tab')[dayNum - 1].classList.add('active');

  // 対応するコンテンツを表示
  document.getElementById('day' + dayNum).classList.add('active');
}
