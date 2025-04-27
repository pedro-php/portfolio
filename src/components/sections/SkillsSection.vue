<template>
  <section id="skills" class="skills py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-title text-center">Skills</h2>
          <p class="lead">Technologies and tools i have knowledge</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-4 mb-5">
          <div class="skills-category">
            <h3 class="skills-category-title">
              <i class="fas fa-code"></i> Frontend Development
            </h3>
            <div class="skills-list">
              <div class="skill-item" v-for="(skill, index) in frontendSkills" :key="index">
                <div class="skill-icon">
                  <img :src="skill.icon" :alt="skill.name">
                </div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-level">
                    <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 mb-5">
          <div class="skills-category">
            <h3 class="skills-category-title">
              <i class="fas fa-server"></i> Backend Development
            </h3>
            <div class="skills-list">
              <div class="skill-item" v-for="(skill, index) in backendSkills" :key="index">
                <div class="skill-icon">
                  <img :src="skill.icon" :alt="skill.name">
                </div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-level">
                    <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 mb-5">
          <div class="skills-category">
            <h3 class="skills-category-title">
              <i class="fas fa-toolbox"></i> Other Skills
            </h3>
            <div class="skills-list">
              <div class="skill-item" v-for="(skill, index) in otherSkills" :key="index">
                <div class="skill-icon">
                  <img :src="skill.icon" :alt="skill.name">
                </div>
                <div class="skill-info">
                  <h4>{{ skill.name }}</h4>
                  <div class="skill-level">
                    <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row mt-4">
        <div class="col-12">
          <h3 class="text-center mb-4">Certificações</h3>
          <div class="certificates-container">
            <div class="certificate" v-for="(certificate, index) in certificates" :key="index">
              <div class="certificate-icon">
                <img :src="certificate.icon" :alt="certificate.name">
              </div>
              <div class="certificate-info">
                <h4>{{ certificate.name }}</h4>
                <p>{{ certificate.issuer }} • {{ certificate.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      frontendSkills: [
        {
          name: 'HTML5 & CSS3',
          icon: 'https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png',
          level: 94
        },
        {
          name: 'JavaScript',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
          level: 100
        },
        {
          name: 'Vue.js',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEX///+44Myw3cetyL+rsbjh4+XB5NIlsnY1tX0lOVQmPlUhOlNFV2lewJI+t4FCuINCu4Q9kHQ0P1s1SV6zub/f8edDvoU2VWGDzKg/pHs0PFuLlJ4rs3k5bGg1RV0ML0rp6+0vRFpteYY7hHDT699wxZ0+mXfr9vA3X2SZ1LdAq346d2zD7XyeAAABIklEQVR4Aa3RBbaDUAxF0Vt/aCh1N+rzn99Pgua77XqBLLIO/q7VFp2u6EH19EenLVroD5zwfN8PQqgw4B+eE4M+EMVElAzT0WgUjMHGAX9Nhwn/HUcAJgNi09mIBWDBiM2mxAYTsLmTEYsl/+2vgJXPX5YLGeDmUGsdsdnygd1+v+OP7UYHrJFrOxJyF4fj8SB3QMK1USCRnLZyhhzfnhISKGVrPWNU0ePrDJWzrnpJRyq96Ipn1K75qrftiG1v+YpXNNwdscdyxJYPYu4Ow8Uy4skjtk8ZEDtY/TUJOYHEug+rSlJHsKokzQjWPF81X3EOq06SJHkEyyQxESyqwLJJbARLkmgEyybRCJZNohEsm0QifKK1XrfwqSjC57IM/+0FV60eh/8r7TcAAAAASUVORK5CYII=',
          level: 85
        },
        {
          name: 'React',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEX///+k3Op3zeGN1OXM6/Pc8feX2Oec2ej0+/xix958z+LH6fKz4e1YxNzk9Phvy+BJwNrA5vCF0eTR7fS34+4/vtno9vkzvNfx+vwXKPc3AAABEklEQVR4AbXRRaLdMAxA0Rsy21JASfa/0j6n7efpPwMzSvyyYZzmXi9u9IHPYsql1hZEhzwpn6zxKVWHXm8DH02ll7vW46kjH40ZWOwMugJN+SjNtKziXLJ14ax8tEWrupUXZ/WKkXerVWGtPNLAVK28bavLqdgCd4Nw3bKfUXiUCFTZYDBLr1IMSBOdLkCxk2C16g460Q+gswYcFrj75AzV83KFXvoRiNGDMxU4qv4b7URCsPs6Ydmfk+LOpIEH/pKRIjzchBObeBNGtdGGed/nYqNqPPkg5TsPGkXE/Hq2ykfjDGQNxOF74Lejl6WK+yFlx9jLRW3utXd8or7tyeZFJbdy3XxybxoLL4fo2PhVfwB6eg3nGSu+JgAAAABJRU5ErkJggg==',
          level: 75
        },
        {
          name: 'Bootstrap',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEWRC/6ICvuHCvuCCvp9Cvh5CfeFAPt7APh2APd1Cfaqa/fo2vzr3fzh0fqgZ/SfU/f////SvPPDo/K9nvHMtfOQTvHPsfhnB/LGq/XfzflzCfXcyfiROfiWR/ZqB/PWwvf48P27j/V5DOeDLOuHOeure/SuiPLw5fuQOfF4A+2VWe+IJu/68/2da+tqAO92JOr++f5YAOicZ++IRezCo/ftjRgzAAABbUlEQVR4AX3S1XaEMBRA0UFiWLGSwQLj7vP/39ab4LXzulc8sz5N03TIkJkQQmhk0NTQ1AZEA2IZUdEmaawxy3Yce5Tr0Q7xhx+Eo6Io9j8pYg0mNsOwFDFhWjmCcXdOWYcp1jUdy5rdZPmAcU50HRclZFKJokoEY5nCPMaaTmxfljA4Bk0qwTKJmlkvsK6TtF6u1oG/oYDbHW8QF/6+wYyQgx9KXPsrKhGbro10hZzSjX8ERNxNOc1muKzrEww0aH5OU+d8uYIxetvt1gJwdy6wbgDWURTad08en65qB1DDh9wmCndXll3d3VXdQvUQgBo+wYYkyg2J5H6FgWv/JhRqaLcgzUiEvNoGFFuHN6iTIFF4lzlrCjiPFcpDzANA8vmEXjCOZSIOm5GAYUXhvpuHRhJ5EPUj36lQoBIQzzs0cHmP35OS+0u0aJBjMC0+cjl+BgbKsiy7tnFISOOzyUdVu8kykAb/sQbHNsYvjA0vKuhfMkMAAAAASUVORK5CYII=',
          level: 90
        }
      ],
      backendSkills: [
        {
          name: 'Node.js',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEhklEQVR4AbWXNbDkRhCG/x49NB4z5snlkZk5MjMzM23k7CA2MzPzhs58eXLM9PjpSZr+XaWZamtqZTjq2qnWLEx/9f89q5HgCOPaT859QD1fnMk5Ukz5ztd3/fYGjiAOG+DGz887rSJfoMdp6gnvielJBYjNvnKXf3fPzxuPC8Cd35+3qqi4zntcph5QBVQJ9URZEEVOiANc5t4Ql3W+uOmHzccE4MHPL5s1MVQ8QPJB9Zyl3goHiDjPJzUsKKhBJJMXv7jpl85RAdz20wU3CvECiVVWNAWw7EuimGEN4JxAXK3IZoHrfHbTz28cFsC9v190WlnxBZCnKQEweE0raDmMilANVmhFiJNgx995Y79ml3/QYoskcv9+2awC5TpV3ggKyFhUQ/ZqEClIzL5CDSFCuBQiKJPJG1mWdT64ykDgEOOiV057oEC1CcCNAgFBhFeQFSBCarAzzaEIQAZoyxreo+LGqqr+vOLts17oARgfK9dPTpSzEMIKCQSAtDqWEtFgSQANiKBksAmUWeP7/IunvXjarASAAuzcOgUQIGi1SIYMsaJtrUMabC27aoCgxsEwpic9yhkCg0gBxAFFqTiwfwYCgdWRaANCtpVSoSDBJ4MmAEYINqyamlBQlD0WUFiPfXtzeE9bSGA4EUrAf9tGAcYKKwllaNJ8WusMiPQAwJHISK+KgwfzdHkSFoT93JpQwiRim20aty5jL+RTPumb1AKJLwccODADVaI92NA9wrCJKzbRRiPO5BosARO7EgvgCELhqdi7L09XtpBEGBooTAFTCoCvghJF6Rm9B9sUQEZSNLwjwMGRHFWZLJle2/++9HwqzWYk6r9oKoPCQLsCcARcABEXZN61qeipKjahFUm2TGJDzApQyGBZqkAKkCkgFDpCJvsxNe7rkYakOUAklITNLUSdEIycZBuAQAhkBAoH0fDR/l0FBP8Syb8lkUpMgAEHKkE/K94DoKG4Ai7vN5mmJxQTo20qMNmGBAOIKSIQhLuQhbcWkB4AurALJB8AK0l82rejQG9Isi1tRTZ7hDZP3hIAQykAxDHINNFnsoYIt9iDe8pklWQ7SUMVkbRdxVYyFeiUbdsQMjrY9DCJkf0V1MeFicb3JPLQVDEEg7I1gy3eoRdgYmAEU/3JPaAZ6omRA2Wyu8AWSwgw0Tsm0j53PhMAIwmA23tiB4KRdCulMXbAoyw1qdl2LkjPEOklHEbg8VD3oW5dK0OMzb9u/mP1mas/JDhbIGvQE3aqwfCJGUjEQbtWElQJcxtivxPIBuS4vPtct9vGZnHaS6etguBzkq0gC5YPYGDQxYOqHc/juZDw4fTczF1W6HSfssL4F4AE5EaCLwBYhUYMDjvMXzoAOymrFTKICLS5KvnQr492vzjCBxMDeZHCB0DMigdWzFvaX6ugPlUgQoxoiQ0Dla7/Inp9pACpLcCLBG8AgKETMsxZ1Jc+qITrL6T0D31xV/dYPJq1g1D4OYg1s+b31SA1gLLrPTpf3PRL9zg+Haf9kQ3IC3MX9s1SsPPJtb+sxxHEX3WUaVLftBigAAAAAElFTkSuQmCC',
          level: 100
        },
        {
          name: 'Express',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEX////8/Pz09PT19fX4+Pjd3d2ampoAAAAzNDWoqKno6Oh0dHRcXFzIycm5ubktLi4hIiN7e3yLi4tmZ2fi4uI9Pj7S0tIHCQuzs7NJSkru7u6goKB+f3/W1taNjo69vb1PT1BsbW0VFRc3ODhehn9TAAAA30lEQVR4Ad3QhXHEMBBA0W8QmAVmTq7/HjOeDdSQewNiLfBukjRNM4A0TeCR/0wSpY0xtiihMgWPsraNnLWd8yFEE3vyOIwAeprhMQ5Lm8O6uT3hWPwKjQspj+zsLvlBuwNmV1DaukS+t3sqs8MWkAU7ejMiGnMhkjoCqnZmQ3CZPwM8Hy/8Hd7xF7BWzjQIxulCsJaQbG6r7xXR2zNHrn1s0AwhUdNPjunejTLxTlHedS89EOMwFAkobzR4ewFptRyI9tPY18uZkFIYzUO5akWU22BflYKx2xGX1Rn/yxf+uwzyBt/vSwAAAABJRU5ErkJggg==',
          level: 95
        },
        {
          name: 'NestJS',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAANlBMVEVHcEzgI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI04MRxOkAAAAEnRSTlMA9GdXHbN6/0ieBuA5jcIT0C5JiDMVAAAAuElEQVR4AWIgCTAC6qALIwZiIAiCKxzRU/7JuvyMXSwdW+f1JURI+pABii5cMEDNrQOIOimVi3D+M1xlWS185K6JqL/KQy8Lg6TEQ5YDwsss1GhH/ob/Lx/mrgNjtLHnbtRf01/J3OgscVV05rgYdNG/ld0aT5wYbcBLQzOE5/UTSC5gaNsXSasBTAcQPItktMvb4pGZKUk7u12Mv4zTRXPTtkyXR72INkGW0asGTrHoTTZRX6ZBZz8K+QvOS9frRQAAAABJRU5ErkJggg==',
          level: 100
        },
        {
          name: 'PHP',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEUAAABPW5NPW5NPW5NPW5NPW5NPW5NPW5NfaJtSXpVsdaD8/f1bZZmcoLr////r6/FkbZxocZ6+wdHX2eJNWpPy8/b19vi6vc7b3OX4+PrO0NxWYZbDxdT6+/zf4Oju7/Ohpb3j5Ovq6u/l5uxgapukqMCQlbOrr8TU1eCAhqp0fKSws8eFi62Vmra3uszR097KzNlPW5OhRzWhAAAAMnRSTlMAKbH0//Cw8///////////////////////////////////////////////////////KIExa5sAAAEmSURBVHgBvNBFYsNAEERRQZkGyhaamdn3P11aGFZ2+RvR05DjuJ6PX/I9V7630FDLdTw01nZ8NNZx8Ef/D7rdXiNQWptGYNnHT2AQBMGgByBkVNyYQDJxCeKEUjoERpTGkylmlOYjVQBFjhZLcoWE68Umu1lwM9pqRgWwXAJYcBJQ7yBqH6c8AEeOezkIM4kTJ7LGGNM5zxfSALYCI8r08ZLXkCfgxvF0xX7+4xZw8jXegT3nwYgP4Mp1POMTUAmvAoo1RhvyKFJmnvCVrTFaz7no5cBS0v19Jg3iDY9IKaUvgxzIGpXqxsBUBQACNb1QX9SgPsl85k/JGsXXYKnv+NxMP9+GiAtsUczDIU3fJEcAEMw4BLMeocxrCMzebOw4zWdjZAAA/C0gQeTDrEQAAAAASUVORK5CYII=',
          level: 80
        },
        {
          name: 'MySQL & PostgreSQL',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABwklEQVR4AVySA3AkQRSG+2wb5TqjeLZt24xt27Zt27Zt20nZm3/SWz2bnRo9fI9NXtmHLf9kQt4akMea5KE6eWdI7yUfjMTurX+sv7jGk+2/rT3TKms7h7Jru15YhUPcL+G86rMpB7/QYTD9AUOOyLtnVrVDuGMWmlvbWdLcV1jf3TU4EVPSdFrHl2NeLMpGoLKOK1IJyCC3FLmob/RRG4r8aheNtLElTbv+2kDDiiT4A4OqJD2TyT3VO4YBav7p0NCSJD3jRsZnnlmGQRQCtD4ERg8Ihp9DUg6c8v3C/UDtqILL2OTcX8dY4Ugoh2DvbcPsE0uQBFoewP1UC2MA88Q8lGPYBMAE59TeNwmmw4Erw+B3RsMPzLqvZkKAe78yhFzS2HNQzklsDxDBOCSVJpa3EjGtb3rlUUVXVpWoFctt6x/nAdzo2C+zGnmQDf/wYPlpn8cVXQhT0TYosOG7+XPzIIgsFo+JCigJSzyp5PrEJlIgEOz9ZyPK8AC7cQouavuC+eIQU9c+GJpXh5XTGfKd4DwxFS3UICwHE5T3Sb1qGGgelU8+mDMr54wLH5YEjaJdbAOdYIno8pqmO/LMD64aAI9KJeRHIoWtAAAAAElFTkSuQmCC',
          level: 100
        }
      ],
      otherSkills: [
        {
          name: 'Docker',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAALVBMVEVHcEwdY+0dY+0dY+0dY+0dY+0dY+0dY+0dY+0dY+0dY+0dY+0dY+0dY+0dY+32uDi8AAAADnRSTlMAyR0P3pCjV9LpuHIxPoqV2p0AAACoSURBVCiRrdHZEoMgDAXQbITV/P/nVlCLBdqHjncmL5wh0QDwRDhn/xXJLP6HrM7Np6paa41mxnut245IRh299+9qY8wOSBIpBAEJgSWkEkVBzHLD0NrZ2VqKGVYUTY4uvGZuFZ21IDAR0Ecx+AMZEmLAXnukQhTHAGKryPm1Szxfx/24CGWF5VpPnK2vf5sMb2sfp95t1PFJt/6ziWAKZUVM6nmm5/MCKYgPErAn/OwAAAAASUVORK5CYII=',
          level: 100
        },
        {
          name: 'Git',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAMFBMVEVHcEz0TCf5TijxSyb1TSf5TifrSSX2TSf0TCf2TSf6TijrSSX0TCf4TSf7TyjsSSU79qcKAAAADHRSTlMA4e4iR1YQO820ZICAJSLHAAAA6ElEQVQokXWSWRLEIAhEAfdE9P63HcDSLGO6kvy8NNIIwE0+Zw8fCtQahW/2SQ+DDTc0+En/vYEwwdH7jiZmFhpdMXN6+FiVHYAbpcO9pkFUmF/nBmSuVd7z6nnSgEqEcY3RPxMpEypP6zGK48g4vYmqSZ0CO3pwo2dKMH36UcglAkTLi5DrFPOA2rPBLMEWHc56upGH5C+Py2qQKyI3bmhXu6hGsVCNJ7tolyGcnce01kr4ca7NNhuj27okgzZbZK38uBZntEh8M7rXhVrl3nWMlOClKxFu1nPSHZt0z0Yi+lx5V8qjzx+XBhDROe95mQAAAABJRU5ErkJggg==',
          level: 100
        },
        {
          name: 'Kubernetes',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEz////////////////////////2+f7///////////////8xbeb+//8bY+UmZ+Xm7PzU3/lGeeiww/QHW+SKp/DD0vdeietxlu2btPKjVmkKAAAADHRSTlMAOhZ32Cqj/YnBYUlp5Q5OAAABd0lEQVQokW1SWXbDMAh0bMXYrUCgBVn3v2hBTfLSZb5khmUGsyxvuB/buvyP24kiuN//p0om6vqXvgUskaKBsuL5Tn8GGJPKedIFz9uTOx9UJC0pPulvbuc0QxYsjR6vzNskw0jR2RS7aPenJdOYpStaoHSKBR0wiC5L7zDVoKU2aIzaWcyK2oeVo0s+xOakjNhrZam1IWbjSD5cqytMFoJeQeoFluaRshsJl+exZEBFUOTM6r2uYMvGaRxbzYxWJakWrL4QXJcPnibxihejjZZuI9xt4tuyW49EGdl9DLcDjJHMqW5LaCkNEITSXAv3VgCFLdrOBWxjvdcCiS5UxmxdSu05UgvLAXkuD7QKxm4Eg68yZjCjgef4CwVHtQ6C7s3M7XO36spTt1GlmB1fQawavq8Ah9dWKcqsRTyVBjx+9uaNUuNKhmpCfcjrUnYX1eYoixs5xTzhop7n4H+aj7cLW0HpDXr+OM07srzA4dfhrtvxwmveFxopIani8yDOAAAAAElFTkSuQmCC',
          level: 80
        },
        {
          name: 'Grafana & Prometheus',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACt0lEQVR4AbyWRbKkQBCG+wgcgW1H5YIj9BHYjru7u7u7C+Pu7sycgCNwhHrt7HL+Zy0lNEFLRnxI6g9URVDox8ozhQMCIMH8wqhtajh34I9yuA9YQQJnFMNdEAI2EIL9wAMOWA8C8DbP9y2N0+HzwFvAOfGyDF4PYkNxBLhP1mcREOZsHk/VRqMSIME5UEpZpIGhxu0lYH+G4W+Bk3XBKusmyr69zAQ5d87+zJ+iPEfEgDVmi7DQh6F+/VSvODWxskjMB6yxULjGxkuwXRfjNS8S8XgezhL3Ifzry0uFo/R+Cxhx3y5ghfABd1JeIQJLbgA4BVlZSa1h5eVYE/DBf84uYC2dA6zgaXnrKNDzzCB3vtI/tAvYTCHgDqSWs4X8VnwTxZWN7afEtQdfoPRg1JTG44h5uDcLqO7E999BEnAHWjJ8bwFiGL6NHOODbKf5Sp+4I7ZeH75PBIANaAJasb3p/wGIqz19c+IhOgfYgiagFTtATqqAg+QqvfTFVztBpdpx4hQirfFxkuMx1LqFHqb0CvWEM+Jt7QxxKmeF21VzmoLJmNjfS4DSyyDggjhXuyi4B/uVGhfIqdj6lv+SIhT3Sp8YPkcXcUWsr10VnIKsX1OaXxYe6qLpOIiAhM9r5Vw19jVvwfoNcus3KajfIrYQ1e+QY6jzwHowH7Ti47mokcZet8n+d9S4Sw7w6/eIDUT1+xiSwZD7FrCF/T0bNB6J/YANyMYT+/5HzG08FpGlNm48xPCs1nwu3gK2IJsvRNB8Kfa3eGHNjxtPc/yyN9/QfsD9AaGvsDDzWPMjhYD7IG5+wILLa8k3EQLuA7/QjyW/i+cAd/GrGCY/i+txfgsiNa7kuv0J+FcsgXCKc8nfovF1wu8gHiX/d0jzPwyD9DDQE/w4qiHw45hGw4/jGu9BGMgnGPcA/OP1MAuOZX8AAAAASUVORK5CYII=',
          level: 95
        },
        {
          name: 'Nginx',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAV1BMVEVHcEwNl0cNl0gOl0gMlkYOmEcNl0gNl0gOl0gNl0gNl0gOl0gOl0gHlkYAlUMmnlU1pGHr9/H////K6NdKrnN3wJNTs3qn0bW73skAkTjP6dmBxZxwuottpFM/AAAADXRSTlMAWeAUQbn/j/KC2MCzV8aAaAAAAMFJREFUeAGF0wUSgDAMBECkBK0Fl/9/EwkuGW68W2/jXON6nut8xhcBzAnEh4kwAkoUPtmPEziSxP7V3BRuSd2DRBbBI1EmiPyQSCq5gZTENLcAijZ6U6OBInaUxmJeKABQJVojb6gqRMzNrKpGpF4PxAYkj1i3HDYdYtkyWBcWbdUy2FazGg7bHrFrGIRlTuRQ6oZHUCYnfF6fHZYmWXRotbwiXTxQpL5c/PFkx4up48n4x/7/JvwH+/+aP5+aKYcJ/UsWvyxQz4gAAAAASUVORK5CYII=',
          level: 80
        }
      ],
      certificates: [
        {
          name: 'Bachelor of Computer Science',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEX///9HcExMYqJUaKbD4v2y2v4ANIoROo3B4Puu2P2s2P0AMomt2P212/1qe7LZ9/8AKoSbxO2z3P8PMYfJ5/5NoeluvPcanfMAmPEAj+lVr/QVnvUTj+QAVKqb0/8xo/M9cric0PxwsfBJneUcPI4IhdwqSpUPmvFFba8/p/SDFGJIAAAAKnRSTlMBAFcwMlP//yb/////XyIg//z/+RX8I/7//zDo6f3zeWX//1Hg/9v//m989cu3AAABRUlEQVR4AU3RBZaEMBAE0DQOCW5h3OX+F9xUweZNj8KPFB2lRASfIBSUu45i/oiiCSxJQ1G4meVFDECBlTOtoTBjTAn1M6tUJ9DV8sgjXG1aG1gmnAP8mdu0HQxAVMyplFdnuFtjX+SsuELVU2vawMxBkuhV61FDQ6EZU5QqTDVVptkuiU7wvDBkxl7UeraWqtMdzUQ+ST86s/sD9HhCZtqmzWLtOYovbuFmuXaYh3LaONXLPupu94fDp73SiHVLPdzH5+WlgXYHxLKZ6Va93C8BlrXWvjdFr6mJfrzw/ZlXhbHXNVI5QEuy4V8xj712Cm7YkDdVlTQsMR0bV5/1P+Z+lZQ09PNkn087T7iAfkU5jWTtdX61WA3qVqYpEKwwPwrYyp8Dk1BZQqtX8znlF8tiOyMFRRZfwsw05eZ68176M9p5+wM9QByVmspWBgAAAABJRU5ErkJggg==',
          issuer: 'Universidade Federal de Alfenas',
          year: '2025'
        },
        {
          name: 'Full Stack Developer',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAJFBMVEWHjZZHcEyHjZaHjZaHjZaHjZaHjZaHjZaHjZaHjZaHjZaHjZZXpc14AAAADHRSTlP+AAqQGemvyzJCYHQXcPNoAAAA90lEQVQokY2S27aDMAhEh3sS//9/DyRprR5XV3lB2RqGIaAvgZ+gAM5E7IDcocAdTuSV5Qq5gEC1gIN/hwlEEERR2W89S0gokcYSdhtFEzGv/DDnyL9iPJvgMBF7N/xQy3Ss8QTHPP2EGsoWqxLGHHpCNXDD7jbQGKYv2ICC4TMCnbLQFmwwL2g7CroVBfU8Qwr2FJJSekHR+U2r8zecsWDpyE7G9ARzF7FWO6GMGbJhrX+OFzYl7+g0iyltII5IV3JOnZFzpltVHMgHJCN9XY5cOe1imbCcDExXFMtGvmwlmw7msbz5t7JmpcZOdr3UXaR/vn+98X8I7wbqSaESqAAAAABJRU5ErkJggg==',
          issuer: 'IBM',
          year: '2025'
        },
        {
          name: 'Systems development technician',
          icon: 'data:image/jpeg;base64,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',
          issuer: 'Colégio Pedro II',
          year: '2018'
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  background-color: var(--secondary);
  padding: 6rem 0;
}

.section-title.text-center::after {
  left: 50%;
  transform: translateX(-50%);
}

.skills-category {
  background-color: var(--light);
  border-radius: 8px;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.skills-category:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.skills-category-title {
  color: var(--primary);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(106, 27, 154, 0.1);
  font-size: 1.5rem;
}

.skills-category-title i {
  margin-right: 0.5rem;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
}

.skill-icon {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(106, 27, 154, 0.05);
  border-radius: 8px;
  padding: 0.5rem;
}

.skill-icon img {
  max-width: 100%;
  max-height: 100%;
}

.skill-info {
  flex-grow: 1;
}

.skill-info h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.skill-level {
  height: 8px;
  background-color: rgba(106, 27, 154, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
  border-radius: 4px;
  transition: width 1.5s ease;
}

.certificates-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.certificate {
  display: flex;
  align-items: center;
  background-color: var(--light);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  width: calc(33.333% - 1rem);
}

.certificate:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.certificate-icon {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(106, 27, 154, 0.05);
  border-radius: 8px;
  padding: 0.5rem;
}

.certificate-icon img {
  max-width: 100%;
  max-height: 100%;
}

.certificate-info h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  color: var(--primary);
}

.certificate-info p {
  margin-bottom: 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

@media (max-width: 992px) {
  .certificate {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 768px) {
  .certificate {
    width: 100%;
  }
}
</style>
