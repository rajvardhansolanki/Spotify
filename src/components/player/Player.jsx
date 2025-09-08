import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Demo playlist
const playlist = [
  {
    title: "California",
    artist: "Cheema",
    src: "https://cdnsongs.com/music/data/Punjabi/202301/Anyway/128/California_Love.mp3",
    thumb: "https://covers.djpunjab.pro/image/503787/California-Love-1.jpg",
  },
  {
    title: "Saiyaara ",
    artist: "Faheem Abdullah",
    src: "https://wapking.pro/siteuploads/files/sfd88/43843/Barbaad%20(Saiyaara)_320(MyMp3Song).mp3",
    thumb: "data:image/jpeg;base64,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",
  },
  {
    title: "Dhadak 2",
    artist: "Darshan Raval",
    src: "https://wapking.pro/siteuploads/files/sfd88/43838/Bas%20Ek%20Dhadak%20(Dhadak%202)_320(MyMp3Song).mp3",
    thumb: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMVFRUXFxYYGBYVFRcVFRUXFxYXGBYYFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OGBAQGi0lHSUtLS0tKy0tLS0tLSstLS0tKy0tLS0tLS0tKy0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABAEAABAgQEAwYEBAUEAQQDAAABAhEAAwQhBRIxQVFhcQYTIoGRoTKxwfAHUtHhFCNCYoIVkqLxcjOywuJDU9L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAApEQACAgIBBAIBAwUAAAAAAAAAAQIRAyESBBMxQSJRgTJCYRSRobHh/9oADAMBAAIRAxEAPwDO9lcPlziszc6ZUpCpk1aVAEJFkpSCkgrUohI6nhHKcxWw7FSmnVT5E5VzBMWoFQWspDISovdKXJAbUvElOqNNMpjcf3BmlX1gpJnNsebNb31tAemgpIA3A4ffrHLJM6eWP0gpSTHLMXdms728tx6xVxStl55lMtZGeWQMqg2cEeFwbKDOx2O8TU7DZumsA+2spEuXmJC5z5kIYJZJzZhmTfUaO3K8TStjXptGZxeqmFYKwSlOXLLPhdgwUwPEOeg8qGE0ClLWpSglKZS5hB6eEBAvrtta8XMV7RonEJK0lQASJjECyQVzABpwAHK4EAUYogSJqcn8yaWf8iUtZP8A5MH5pEdUYujmlJWVjPc5AWSbOokCz5Wh1QVpPdlSVGzqct0cwPGZOVfNw/I/t7Qpiyoktc3t724RWiVlqSgy0pJAOYWHDmTxixS1akljlIUCGOrEZW6besDUTdAfhfTkdWhsxTW1vY8RtGAFZlUskBQGYb8AwF4amtuRfq/Hj97RSlTjmzNYuOOvD2iakSnvFM+UAkOQNOoN77RqNZcnVbMDlO+xY9fX1g/QVxdP80ZBfKHBsXGo1fjGRKvCFDY2HyvE9LUKuVFxs/zgSiPGdG3qTMEo1CZqnBJIFmfQKbfqGvGjwfEDOkpWpszbbhhdvP2MedGvJLKV4SCLnUEv52Leca3s5iMsgIcBgALhjqWBO/iPoIhOLotGabNIg3i5LMD0qvF2WY5ZHTEsZoszqIggAucqSQbZc3wg31ZjycRSExiDYsQWOh68o7NrVKUpTkFRcsSHOvGAkhndluRSqPDVtRclOb5F4tCnIBJa2t+bGB8ioVpmV6mCUmYo6knqTG0B2NRIzECwd7nkHvEFRhrv40b7/f2IJS0NcW+9or1SlNqfWAv5NbvRnaugyqSM6TmLOC4FwHPAXiximFplJBSokvlIJBOhL2FtNL6+vawknxEluJiCdMzMGZtLqNuAcloR0USla/yVWhRPlhQhY8zpNIKU0CqSCtNHtSPDj5C1NBOSYF05ghJVHPIsggFEIUoMVBmSTreM/jFCqrUVeIBCFKUTpmAIPidhtc8N4PS0uNHc8HsGew2uL9IzuP1cwlcpCAEIKQA5KVOU+Fv6lZjfhe2sJHzor+3ZhZdAFkkWy2LG5LMAOZN4hxTIEhCPFkNiObE33v0grigmSgRNJCye8URcXcJvurLt/dfSM/OICWLkm+rgdeJjrTs5GqEp1hrunQbM+nW8QSZpQoKGx9eIjtOti7s3HjExm5gSQGSABZn4ddzBAVpiuGnyjjQ+ez6Np1jgQwBJB5euvpAMcU4t6frFjuSU5ns7Hjx+kRTp2Zn25bEv9YkTNADDd34tt5/tBMMWrw5W0Ou8MTNOn2Ymlg9bEe0VSGgWYvSZ5F3ufaLFJOAD94QeRZjt8veBIVHUm8Ex6Z2RxMn+UtQJB8JsONvZ42UlUeK008pAY+J3fnYCPU+ytUV06SouoFST5Et7NHJnx1s6sE70GVqiLNHVmIgY5zpsv05gvTQHpYNUohWFl1OkVamLW0UatUYReQXUxWEPqFxClUI0XiyVoUczR2EKWeW0cFKeBlIIJSDHtyPDQUpzBGTAmSuCEkvpEJIsmW+9DgOp3QGSGck3dRLEeEdGJjH1VUFLMuWskqUUk5SQE6qCHNrPfXUxY7R4rlmkyycoSUEG7lmUcrtfQfpAOmqzIJns5IICVh1XIckH4X46+pjQh7DOfoj7QVQUsgulKi7l2HANYn9fUgaqVlsSTws2p3iz3yVa3Ny9+Lt7xewPAF1FTKln4VzZaVEbJKgFEdAT6RXUUR3Jmg7M9kJSKdNZWJz95/6EgEjOB/8AkWRfK+g3F94hx3BUzAyZSJamJSJdk2D5SnnxjZdo64d6peXwy/5cpAsEoRa3p7RkpZ72YZxBSEAhLqcKUQxy8gCfOORTk3yPS7UIxUaMTlBBJVfgblX6Dr7xXV8/aLmIIyqIGmYnl5xUFzYXjsvR5rVOiZKk5W/q+/T9osUFEVF9tRzaFQ0C1l2tGqwrCTvp920hZSSQ+PG5MdhvZ0Ejltz3juK9lwr4Q0bXC6doLLoAoRzdx2d3Zi1VHgWJ4eqSpjpsYrpLDnq8ejduMEZKi1wHEecIQTpfeOjHPkrOLNj4SosUa1HwpfMSGI1jfdjq4ABN/wAvJ3u8ecomNoSDytEsivmoDIWpOuhbXX1gzXJULCXF2e900rPYKT1KgkAef3aCAwEgP30t+GreYPG0fPqMcqACBMLEgtZnGhA0B6Reou0lQhPhmEXuNRt+45gkRyvp5emdK6iL9Htk8y5HxzAP8VN/u0MOkdoJQ19j9I8bndqJq2SpR1Op1dmzcS7uYty8UcX9NvfSB2H7Kd6LPZZXaSlJymZlPBQKfeH1SgQ6SCOILx40jECRlckbOXY+cEcNx6ZLsFEEbH4TwtwP3yzwP0BTVm2mEvpCloPCIsGxWXUC1lDVJ+kGZMsRyzteTphGyj3SuEKC3dCFE+RTtnjlMIuyoqU4i0iPdZ4RclGL1OvbQHUwMlmL1GCpQABPIROQ8fJUxynUpeUFjeYLAZsxchRe4Zhtw4xhK5C1KIJ02vaPS8SowBl8RUTlSwHhJAJD77femFx7Dgg5UuVXzHS4LHrd4GNofJGtgilQ6hHp3ZKXkmSlHQKTfh4mJjPdn+zBUkTCoX+JPDzb2jYT8PMqWA77W9olmmnov00GnbKvaSTMSiYpOiXUpwDZ7+jwLwySoyELUQ6x4UiwCXtYbkRoMaBVKClAgTEkK2CrMv8AXzgXgtIQgKUGQgMnoIhF/E7J/qMrjuDELAAZ3N94mwvAtykfN4JqV3k4kgly4J0A2+saGjQAA8WlkaVHPDEpScgfhuGAG6WA9/KDkqkHCL9JS5g8DqirUlRA1FmO4iHKzo40GqSkMXZsogPGdw/tgJXhmot+bh5bxqEYnJnS80tQIbzHURpRaMpK6Mb2oUO7UVaAEn0jxlNkm9yWbdt3HCPS/wAR6/LKKAbrOXy39oxeB4f3hzqFnsBp1i+J8Yts5c8XkyKKBX8GrLmItEGWNvXUQyEARlZ0jKtjpv0MUhOyOXDw8FJrxLJQSWiY0xbmIs00piPvaHIUVu64wTpbov0L/wBJ4x1dOPmfSx++kPkJCVKe4NupgDpESQQRwP39/wDcWkzLj06/evlDlyg2Q/EHIPEFik/SKr+LKbPYHgr9HuIA8Q3hdYZUzOD8LO39SDoeqTb3j07Dq4LSDuz9f3jyWUogBQHiS7jik2WnobGNh2Xnse7JdJDoO7HT9DHNmxqR2YZ1o2n8VCgZ/BnifvzhRy9o6OZ51TiLKRFOQqCGG05nTUyxubngkXJ9I9iWjxEPQIu0lQpCgpPQtqxsfnEGO0v8Mq+YyzovUA8FtcHmzQb7E0InK70sZaNwQQpWoT8ifKJSkuNlYpp0MqkqTJcoIWLZidLqUbM1315QMHZiZUTUrWoJlkhSgCHJbYiwFyY9LqmUCG15bdN4qow5KQcoAB4Bo5Flo7O0peQHR4SiSSlKQ1mUN24wp6CtQHQffrBeajIltYFU9QO8G8Lbey6Sjo0tRQSlSUy5qQoOLbvpZoC40iWwlywAlI0ghUTi23C/3zgNUTQHOttTxhIoLdmXXSFK+RY+cEpMQVEwExHLntFZWxY0jYYO2kC+2WGqCe+Rqm5A/qA1bm0OwequI0WIgLle0TTplGrPMFV8tSNQpxYtq8DpNNUS5iVSnCSoE30G7xoKXsohClKFkku3C+0HKfDkzCJZcJyqJaxLMGfz9oryrwSa1cjCY8VT0ziA4QE5lbAksA/5i4twvD8DpGQkRu8awSTKoVypYypfMdypXFSjck8THl8sTVE55plJGgTYnzgr5KkCMvMjVKonBeMnjVCyn4/MXjZYbSTAgFM/vEtdKxfyWPrDMSoBMSQRr7GNCXFmyR5IwSEtbl8r/t6RCuztqNOf20XK2mVLUQR98Ry1ilPS4jqTs8+UGmWJM7fVmI5gi/8Ax9xEk74Te6R65CPpl9YHylsx4fLVvI3i8iYLHYN/t0NvP/jGMtotU6hNSG1T7gkgjyLesRVMlzezpS/IuUv/ALh6RyQMiiBps3A3b5ekXaqXmduB57gvz1BgDLaG4TMzj+4eFQ5hxpwNxGjwWQQpt0l080K1HkQfSMrKmmXOEwDwq+JPPRR9Q8eiU1IlkTBdKku/EEeLoWHqDEp6OjG7RY/1Ifbx2K3+kTfziOwtIe2YOUuNr2VpO7l96fimacQl7DqTfyEZSgwedM0TlHFfhHpqfSNVIT3MlMorc3Dhx8RJ8OvFubR05Hao4ILdkWO1gJykAgje4IvaCXZnHZcuUmQUplhOjWSrck/3avx9ozuKkKQW+JLW3I/NbqPnvA6QvNC9tONB51Kz2CgqUqDggiJaioEeWYXjcyRq5R8v2jX0uLJmIzPaOOeFxZ348qkiziE+xJMZOjxH+eL2J+RtD8dxUkEDTaMVOrSF5nuC/vFIQ0acz1HFK5jqRb7aM/W4lsDb714xWTiXeykrGpF+RgHUTCVG8aMDcgqaonV3hCafvhAmTPvxi9nzEAXgtGTDGH1RBjUDEP5dzGInKmFQRLCQQ3xAuqwPh4sCIvyakhBB8K2s76+cRlEtCSs0NNN4xcw8fzUniFD2f6Rn6WtkhkLJTMOhIUAeQU2U+sFJVUmU0xZ8MtKlqPJikAcySAOsAM1aZa7a1yJdMpBPimeFKdzcOegG/SPI6+lEyYnUgEPlLFgb+z+sG6yuXUTVTZmqtBshOyRyHuXMR0tDnmAJ1f0i0XxI9v40FsBwyYC6FEJ4EufMhh7RoJ1Gw5wUwygEtAfVorVq7xFztlFGkZTH8PSpBcXGhjBKDHKfvg/KPUq1ikjiDGIxWg8TiL4peiOWF+DMTk5VFtNvv28otUBBLdffUfXy5wRxTDFCWmY1lPf3/fygJROFjzi6do5JLjKgjSqJSx1QSk80vr5H6xbQosCC+ViD/aWe22kU6Y/zVg87+TkRYEvKkJNndPQvl+sEXYTFP3qfCyZmz2ClAPrsfiPnBjAcVKf5KwUlwcp/pOigOH7c3ICinqCVKP8ARlVzYWMEaiZnWlJ+JLKQscAplJPJx6GEktFoy3ZrP4g/mMKBf+t8/aOxA6SlW44A4TctYC/Uq2A6xn5+ITJheYolJL5U2DX0bcPvblFeXUFBf+k6gf0nRx930iKpsbMz7aB7gp/tOvrHpLGkeU5Nh2VVlTMRmYlKtAoXzP8AIjiTxJiApCVZgbPcMfCfy3+z5GA1NPyqyksDcKH9KtlD2cbiC9NV5wpJOVSbLQALhrKSSb8QeY81aoJeIGUl/wBoqSahSD4CcurfVuEOIUEhIYg6E7+Q+UdRKWWGZg18qQ55CJtfY0ZNPRHXVOcQGnoeDlVRkuoBlalAuW5c7XHnA1cm0TqjqT5EXZ+vyKMpWhLi9gYIVctjb3MZ+tknUai/6QWk1veIB3a44HeNXsCdaY6UMtzBnDEOwG5v9WgAlblnjRYEHLbMP3+sJNaKY3bDdTRpUtOYfEyQt7y1bFI5t6tCrKMKeVNPjAstOrHTr0ibOFKKLOOPDYwJnTyFqymzlrvvEoRci2SagrDlFhElUqWma6lJZTgsxF2HJ4f2mogqUgIsjM699B4H5a+cC6etI3gvR1763EO8RzLO0zGSlSFOxWCA7rDAiCPZZbTHMS9r+67xAloykIdZTo5JILbMGDwFlVyJakkTLkgNxctE6vR2uWlI9KnVjxRqVuIqypzgRLMVaJ0K5A2oOsCpyQTBGtmM8Ap9ReKRQjYZmyu+lIljKJaQSt/ic+FATy1frGGwaQgzlhXFX36wYXjeX+UOOYndgAEj1v5iAlKSlUw7MSD5uItBNJkMrTaOSQDOWOOZv9uYDzCT6wQq/EiSoj8z9UEAetjAClWcxVvf1Ph/+RPlGjrWUMgtZwPMsG5sYoyEdpkGF3lqJ3SU+YP1CVCCNEkq7u92Y/5oc+hR84H0RAQX0Cj/AOwi/mqLdHV933QVqpKn5H7MZjxZHmPP0hRN/qU78nyhROivJAict3I8+fHzFvK8RylOMp8umretx05xHJmXbjp1/d284YoseWo6R6VHnDJvA6jSOGoVZaSy0W6jnxF/TpE1SnMAoa7/AH5j15RVSLwrVhNBT9p5WT+YFBWhSLp6i4b994nR2mkjTOTyQAbAm5Jb5xmKmlsFDQ/T/v2MQSk/EP7S3lr7PEXEawriPaKatxLaWn+34z1Xr6NFehxJQ8K7jjuP1EDSlteX6xLLANydH9Ax09YWkFSadhmrWEBzdR0HIamIZ5bxo0VqOu3WKeJzHmKfQMARtbTo8TU0/KMqw6bO3LQjjCpUPKVyJZU5z5+caHB6li45cPO8QysLlzUhyxYZVp3G3UQ5FN3XhzPzZjCtXopF8NsIrn5lFQJD211HOHZoHoW0S97DJJEZScnbLgmRYp6hiIF5473kNSFNPWzJPcFS0lUxTpQxACWHxKJB0fT9Yy0mhQ76n8x+nARpsApET3RM+HK5LsQbMxinVUSJcwhBcDf9I5Z/Fs9DFNSgkWaWZYAxZmToGiY0dM54lRQirlu8AqgXgzPUIFVihFIgYybRSlSszELBuQHCh02PT3ilPMpAy/GCPjIIPR3vFozTLSVAlzZhvA2fLCg7HMNRp6cYqiMil/Dktl2UCRo4G493EWq2d43H9o8ipR+ShEdJmBZ7HY/I/rEVdKKVZtj7F9/vhDnO9F6o8SCoaAnM3P8AcCIJlU8xAPBuuZwfpEOG12RbG4Lgg6F9R01ivWpyzSxcBik8neCkCUr2Es837JhRL/Fp/KIUajcv5BAVE81TpB6v9fe/+QitMso8P1iSStgX0BB8jZXzT6R3M5yWnmbb6jmRt5gkecNnJY201HQ3HsYiWCD0PyixMLpCvI/P5n/kIUI+V4pahuLj3/f/AHRTRKGYc7eob6xPRzGV1t/3ydobMRlURw0+kI0EqzkulJ3y38lKHyaI6fUjiCPNnT/yAi7WJYJUNCpXvlI+o8ohYOFDYg+heEoI2YXY8U36jT5EeURSppFtRw68Is1MnL0Cix/tsU+oKjFVdiYnQQ7gmJ5GBLo0Y6pfhxEGqsglwXB3EYZJ5tG0k0Jl0stZJJV8Q/K5OX2Z4Vqh021QwQ7PFaXMhKmQRCx3kPTMij3kSS1wxjS4JXZAsfmSw6iHFRZ94EUioJd7aIZIW7OjFk4ofLkKV0jlUpKBrfr9IoT5qj/UfUxXqxmAO6bdU8PKE7ZZZldEsyoitKSZi22hikKBY/Y2MEcKkhLmNVDuVnaumTlZtLwDxZYzAoLONxZz7RoqtTiAFUvLrp0ceYhok5+AX/EKcFgeLXBiepU4ChuQPTj+sVsQQlRzBr8LQygmm6CX4PxfjFUcz+mU5xu7NexEKomO3Qj9PnEtSGezDhtzio8MTCXeiFEffDgIUYwycXAP39u8KnVduLj1DQxB8J5ff/8AURPHaIWlq05geo8P0fziSlX8SToz+WivYv8A4xBNLh+b+tj/AMk+8clTGIPrzG49HhTEqgQWO1osVBcBW+h6/eaIJ409OuWz/wC0ph9Op0lPp7e7sPMwrCdN0EcL/P8AUmKaFWI4RZkrYjhoehitPSxPpCmL80FUl2PwOC1iULUnX/xVAxReCMie8sDksEuf6UApsdNTDsI7MVtQM0ilnzE/mRLUU/7maJugg6mluoDn8rx6Bgs0TJRQq4OsYo0syTMKJiFS5iSykrBStO7FJ30MGcMrMiuRic0WxNbRJW05lKKT5HiIornQX7SqKpaFDYsehH6iM0pcNBWTkqZdTMizIVApEyL1PMhmhQzTmLOeKVOuNDI7Pqy5pixLHBnPncARseGeR/FEs/V4unS7kqvx9/2AqlRGtcEcVwlcoZwQtB/qG3UQIWqBPHKDqSGxZ4Zo88btBAScwcajTodvIvFju8rc4rYdVhKiCdSEjz/7eCVYrTpHNJbO6E7RTnGA2JSngwuKq5TmMhm7MlUJKTYtxt9Ypd4Qdb8Y1NXRBjaMxVyiktFUc01Rblz84ObZnMVZ0gg8Qbg7GJKdLoYan3hS0sljzPTaGQhDkHEesKFaFDUYdIP0+bfWGqjiN+kdmG56x1LwKSyzZuo9WI9xEQMKWrXyPof3hTNT1gGLKS6fL3R/9Ve0ckrYwynXr5Hy0Pso+kMNi3CAYuCSpawhCSpSyAlKQ6lKJbKkDUvaD1R2DxQ3/gZ72/o5cXbV/aA2H4guTMlz5bZ5agpJUkKDi1wddP8Ak4veN0PxixNdiqQjQZhLUGBIcnx3YOYnK/RjUfhV+F4QP4jEZAzgnu5MwBQDgDMtAJCtLA8dLR6aa6ZLJXPMinp0g/ErxFg4KlkpRLDA+HxdRHm/apWOziE0a1TJXhfKJSSQRLyqJmAZknxuUkgEEFmjxvtDOrBPMquXMWqWrxS1zCQDuA1kuOHGJNNjGh/FLtHJrcSVNkXlpQiWFs3eZSolbHbxMH2SIz8o+JuBj2LDKHCV4YrEavC5VOgJdKUrWVTNkN8LFSmbXUXit2GwqixI55eDJlSkuFTV1M3KpX5UAfERvsOtjvRk6MNMTnlFPEe8Ytc2PcMVxfDKafMky8NlTe7Vlz9+Sk2BOymLlmfaF2ZmzqrMujwDD0S0kpE2blAUQf6TkzK6gM+8CDoabvZ4gibFunnjiPWPdOy2HzqytqJGIUFHKlyUJP8AIlZVFaz/AC2mO5ASldrbR5/2m7clE6opaaRTGmSsoSqZJ7xaggsDmKmZwSGAs0UTsQEYLXJlzULUHSFXH18tfKLeKYsqevMdNkvZI/WM7/FFSiogB9khh5DaLtIhUxQSgFSjoBrD3LjwXgjLFj7nektpVf0jWdnF55FQhR8ASWfYlJNujA+cZgrjSYm1JTdwFPMmXU2yWY+unrwjLgQ/UKlCPtLZydB8pZcsf0yevwqv8kVyscn9Wt7tGym3jNYfSlSwT8ILk8W0HrGgEyOWUbPTjKhipBaGGT1ifvIZMW+sLwG7oOqkDr1jNYvTbiNgtKeAinPoZan1HQ/rBUGgSyJmHlrYH7a4P0ifvXS6t/U84v4pgwljOlRIe4I05uIDzBvtDUIP8PH2hRDCjWEkT+vyhL+g+UJP36Qln5D5R02Kdl79D8n+kKZr5D5COSzcQl7dPqYDMPkatxceoaOzTd+IB9r+4MRoUxBiSaNOTj0P7xrMSSS4I+7/ALhMG+xPZ5dfVopkFgQpS1fllpuo9TZI5qEZ+Sb/AH1HuBGt/DbtanDa3vlpK5S0KlrCWzBKilQUkFgSCkWcWJgS8aMeldpO3krCZacOw9Pez0JyqUoqWiWrK9kkkqV/a7DfhGU7MdkKrGalU6uqFJ8QKk5FFTeF028Mh0nw7ljaxMayq/E7A6YzJ1JSlc+bmUpQkJllSlEk55i2UxNyz6xS7A9tZz1eJVoX3KmTLSm6ApIUtQQkfD8N1EMSUxDYw/8AEpaaqvpMFkEIlIKVTAi3iKVLCWG4lgnrMHCIfxQ7Z/waRhWHnuhKQBNWmxAIcS5f5bFydbgcY8vldpZwrlVwP80zVTb3DqJdPTKojkI9Lm/iVg9akf6hh/8ANygKmZUq0/LNQO8HK0GqAYvsFRmpqZdPfxqD8WDld+JCTeN/+Jfa2rk1UrCsKBlqSEAmWBnWtQ8KEuGSkJYk89gIirMGpKFEjGsLUpUhKgJkpSisZVEyiUKJdwpVwS1tQxclU/iNhkpS6uRSmZWTEsTla5ypAMxY8KbB8o231gewhbFpq8Iwwy0rM+vqSXWASuZUTWSV8WS6Up4snnGNwjsBh+HyUz8amPMVcSUqJSgE2ByXWqxNi1iwLPHpNfMl08r/AFKtUlS0SZeW1krCVk5RxKpqk+SRrHztj+NVWK1edQKlKJEtA+GWngNhxKv2ENFN6Qsmoq2ei9o+wtBV0Rr8HOUJPilEqyqYsoMsvLWHzNoRtd4DJRKw2VciZULFuA5jcIB8y3pv/wAJMETTSKmmK86lpStYezqCkeFOybM+7creKGkq6iYpZlzFqJPiKWDDRibMBHZivE5Rr5f6/wCnl5nHqlGXOsW79XT+/okm1KpiitZdR1P3tEkhDlonl4FMSQJhSj/JP1IgxTYPLAA71IP/AJJ/W/rCPDOTOj+swQSp6/gqyywiTvImxLC1SgFZgtB3G3UfuYGmZE543B0yuLNDNHlB2i2ZkMVMiqZsM70wtFbLfeQ1UyK+eGlUagWOqAFAg7xj6yQZain06RrSYCY/KsFc29YEloaLA2aFCjkSHJUxxUJMJUdIok6iErbp9THEwjC2EUSzf/kfdohiVe/WMA5LLEdRE8uQpaglIckfItqegisI9mw+mlyMElzaCSJlYpIVMmAPNQFqmJUUjXwlJQG0LNcgxnKjUeS4jRTJTCYkpPAggkWvlLFuogtI7Wz00BoU5RLJUVHKkqVmKSQ5DpHgGhveAM5ZJOZypyS/xEvd33eLGH4XPnHLJkzZqjtLlrWdDskc4EjFNMFOzeAz62pRT06Spajc/wBKEv4lrOyR72AuQI2/Zf8ABivnlKqlqWW98zKmtyljT/IjpGzxbtPhmASFUuHpTOqjZRJzeIWzVEwcP/1pb/F3hXL6CDPxerJOH4dT4PTlycq5j3IQlWZ1cCuZ4v8AE8RHm2Ad3MmSkTlhEtS0iYonKEoKhmJOwZ7wGxXEZtRNXOnLK5kw5lKOpP0ADADYAR2hmbQrVGPVvx+7UomLk0UhYKEDPNylwVG0tBbgAVNzSdhGN7H9paWkSQuVMK1fFMTlNtkgEhh9YzOJI8T8Q/nvDKClVNmIloBKlqCQAHLktpFMWR43yiR6jp4Z4PHPw/wfRvYLE5JoazEEyyhOVbqWlKVLEiWS7gkkAkgdDHjtR2yqp3hQ0tPBNz/ujd9ucUlUOFy8Hp1Zpq0p70p/oQVFavNRDcwomPN6SmCYpHNNuUr8kF0WCMYxcb4+L3RZlA6qJJOpMTQxMPBhC5apaxSLO6Tqk6HpwPOIJzOW0hkNJguTapixhFNtCUqInjqjEbwEOTJVDzEIMSJMEB0GBuOD+Weo+cETFDFx/LVAfgK8mbhR2FESw8QlQ0Q5UX9CiQNekJQjqN+kKZrAow0CHzPqYajUdRDl6Dz+cajDI0GDdqqmlGWWrwhSiAfiQVZcxlrHiQ4AdixYOIz8Szfr8wIJjbYZ+IYQsrm0cmcrXMtMvOP8+7c+bmNJK/HEoSe5w6RLU2oWQPMJQCfWPIRCTv0+ohJRQT178S8Rx1FImbVz0SZc1eQSqYFKSCnMCZjlV/F4Sf6TaPIFQTxTtBVVCJcufOXMRKGWWlRcIDAWG5YAObwMMBKjHIkkKYxHHUFjGZjS4L2bqK9aZVOjMoFyTZKUnUqOwjbYphNNhUvukMqrsFTdJpzDxZBcypW2aylA2sCVZXCu1FVLQESF9yAX/lJShzx8IDnmpzFdUxS1Fa1FSlF1KUSpSjxUTcmMo35ElL6HKJUorUSVKLkm5MOENeOFUOTJXjrxGDHXjGHkw0qhpVDCqAES1Q0Q1SoSTBRmTJiQCI5cSmCARijiv/pq6RegZja/A3E/vAfgK8gCFChRMsdEOVHYUVQGdl/Q/KOTNfT5R2FBZjiNR1EdXoPP5woUAwwRKvT0/wDbHIUEwyODeOwoVmQ0woUKFCKOQoUAwco/hEXUwoUOQHQ1cKFGMPlaDpDo5CjGOKhhhQoASIw5MKFBMyaXEw+hjsKCA4NBAfHdE9fpChQsvA0fIFhQoUSLH//Z",
  },
  {
    title: "Humsafar",
    artist: "Tulsi Kumar",
    src: "https://wapking.pro/siteuploads/files/sfd88/43840/Humsafar%20(Saiyaara)_320(MyMp3Song).mp3",
    thumb: "https://wapking.pro/siteuploads/thumb/sft88/43840_3.jpg",
  },
  {
    title: "Besharam",
    artist: "Arijit",
    src: "https://wapking.pro/siteuploads/files/sfd86/42950/Besharam%20Rang%20(Pathaan)_320(MyMp3Song).mp3",
    thumb: "https://wapking.pro/siteuploads/thumb/c/5502_3.jpg",
  },
  {
    title: "California",
    artist: "Cheema",
    src: "https://cdnsongs.com/music/data/Punjabi/202301/Anyway/128/California_Love.mp3",
    thumb: "https://covers.djpunjab.pro/image/503787/California-Love-1.jpg",
  }
];

const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);
  const { backgroundColor, fontColor } = useSelector(
    (state) => state.theme.colors
  );


  const currentSong = playlist[currentIndex];

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Choose icon based on volume
  const getVolumeIcon = () => {
    if (volume === 0) return "🔇";
    if (volume < 0.5) return "🔉";
    return "🔊";
  };

  // Play / Pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update current time
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Handle seek
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Next song
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  // Previous song
  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
  };

  // Auto play when song changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex]);

  // Get song duration on load
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Format time mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong, volume]);

  return (
    <div className="w-full h-full flex">
      <div className="md:w-2/6 w-full h-full p-2 flex gap-2 justify-between">
        <div className="flex gap-3">
          <div className="md:w-[100px] md:h-[60px] w-[65px] h-[60px] overflow-hidden rounded-sm flex justify-center items-center">
            <img
              className="w-full h-full object-cover block"
              src={currentSong.thumb}
              alt="thumbnail"
            />
          </div>
          <div className="md:w-full px-1 text-white">
            <p className="text-[0.8rem] font-bold truncate line-clamp-1">
              {currentSong.title.split(" ").slice(0, 2).join(" ") +
                (currentSong.title.split(" ").length > 2 ? "..." : "")}
            </p>
            <p className="text-[0.8rem] line-clamp-1">
              {currentSong.artist.split(" ").slice(0, 2).join(" ") +
                (currentSong.artist.split(" ").length > 2 ? "..." : "")}
            </p>
          </div>

        </div>
        <div className="block md:hidden h-full">
          <div className="w-[200px] h-full flex justify-center items-center gap-4">
            <div onClick={handlePrev} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-amber-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div
              onClick={togglePlay}
              className="md:w-18 w-12 h-12 mt-1 flex items-center justify-center rounded-full border border-white cursor-pointer"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M6.75 4.5h2.25v15H6.75V4.5zm8.25 0h2.25v15H15V4.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              )}
            </div>
            <div className="cursor-pointer relative inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-amber-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              {getVolumeIcon()}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute bottom-[120%] left-1/2 -translate-x-1/2 -rotate-90 w-28 hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden md:block p-3">
        <div className="w-full h-[50%] flex gap-4 items-center justify-between">
          <div></div>
          <div className="flex items-center gap-4">
            <div onClick={handlePrev} className="cursor-pointer hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-amber-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div onClick={togglePlay} className="cursor-pointer">
              {!isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-amber-50">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-amber-50">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              )}
            </div>

            <div onClick={handleNext} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-amber-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4 mr-4">
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-amber-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <div className="cursor-pointer">
              <div className="relative">
                <div
                  onClick={() => setShowVolume(!showVolume)}
                >
                  {volume === 0 ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                  }
                </div>

                {showVolume && (
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 p-2 rounded-lg shadow-lg rotate-[270deg]" style={{ backgroundColor: backgroundColor, border: `1px solid ${fontColor}` }}>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-24 accent-green-900"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] flex items-end">
          <div className="flex items-center w-full gap-2">
            <span className="text-xs text-gray-300 w-10 text-right">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-amber-400
             [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:w-3
             [&::-webkit-slider-thumb]:h-3
             [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:bg-green-900
             [&::-webkit-slider-thumb]:cursor-pointer
             [&::-moz-range-thumb]:w-3
             [&::-moz-range-thumb]:h-3
             [&::-moz-range-thumb]:rounded-full
             [&::-moz-range-thumb]:bg-green-900
             [&::-moz-range-thumb]:border-0
             [&::-moz-range-thumb]:cursor-pointer"
            />

            <span className="text-xs text-gray-300 w-10 text-left">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />
    </div>
  );
};

export default Player;
