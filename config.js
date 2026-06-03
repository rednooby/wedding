/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "최진헌",
    nameEn: "Groom",
    father: "최종규",
    mother: "윤정미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이윤영",
    nameEn: "Bride",
    father: "이관도",
    mother: "오미현",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-13",
    time: "14:00",
    venue: "더 레이나 웨딩홀",
    hall: "지하 1층 단독홀",
    address: "경기도 의정부시 호암로 95 에벤에셀관 B1F",
    tel: "031-876-2888",
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "'당신은 내가 더 좋은 사람이 되고 싶게 만들어요.' \n-영화<이보다 더 좋을 순 없다>\n\n 서로를 만나기 전보다 더 나은 내일을 꿈꾸게\n되었습니다.\n부족한 부분을 채워주고, \n잘하는 부분은 아낌없이 응원하며\n매일 조금씩 더 좋은 사람이 되어 곁을 지키겠습니다.\n저희 두사람이 하나로 거듭나는 날, \n함께해 주시길 바랍니다. "
  }, 

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/btYkDZffUE",
    naver: "https://naver.me/5pwowzMl"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "최진헌", bank: "카카오뱅크", number: "3333-05-9837461" },
      { role: "아버지", name: "최종규", bank: "우리은행", number: "103-071-83390" },
      { role: "어머니", name: "윤정미", bank: "신한은행", number: "110-071-106169" }
    ],
    bride: [
      { role: "신부", name: "이윤영", bank: "신한은행", number: "110-285-174687" },
      { role: "어머니", name: "오미현", bank: "우리은행", number: "097-059487-12-201" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "최진헌 ♥ 이윤영 결혼합니다",
    description: "2026년 9월 13일, 소중한 분들을 초대합니다."
  }
};
