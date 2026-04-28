"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

const htmlContent = `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;padding:40px 16px;font-family:'Montserrat',Arial,sans-serif;">
  <tr>
    <td align="center" style="font-family:'Montserrat',Arial,sans-serif;">
      <table width="680" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;width:100%;font-family:'Montserrat',Arial,sans-serif;">

        <!-- HEADER -->
        <tr>
          <td style="background:#111111;border-top:3px solid #de0917;border-radius:8px 8px 0 0;padding:28px 40px 20px 40px;text-align:center;vertical-align:middle;font-family:'Montserrat',Arial,sans-serif;">
            <a href="https://nikaia-automations.com" target="_blank" style="display:inline-block;">
              <img src="/logo-nikaia.png" alt="NikaIA Automations" width="200" style="display:block;border:0;max-width:200px;" />
            </a>
            <p style="margin:14px auto 0 auto;font-family:'Montserrat',Arial,sans-serif;font-size:12px;font-weight:700;color:#ffffff;text-align:center;line-height:1.4;">
              transformez vos tâches en revenus
            </p>
          </td>
        </tr>

        <!-- SEPARATEUR -->
        <tr>
          <td style="height:2px;background:linear-gradient(90deg,#de0917 0%,#ff4455 50%,#de0917 100%);"></td>
        </tr>

        <!-- PHOTO + ACCROCHE -->
        <tr>
          <td style="background:#141414;padding:48px 40px 0 40px;text-align:center;font-family:'Montserrat',Arial,sans-serif;">
            <img src="https://agent.nikaia-automations.com/static-assets/photo-profil.png" alt="Fred Raspo" width="120" style="display:inline-block;border:0;border-radius:50%;margin-bottom:28px;" />
            <h1 style="margin:0 0 16px 0;font-family:'Montserrat',Arial,sans-serif;font-size:28px;font-weight:900;line-height:1.22;color:#ffffff;letter-spacing:-0.5px;">
              Et si une partie de votre travail<br/>
              <span style="color:#de0917;">se faisait toute seule grâce à l'IA&nbsp;?</span>
            </h1>
            <p style="margin:0 0 40px 0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:600;color:#888888;line-height:1.6;">
              Les professionnels qui automatisent leurs relances<br/>signent jusqu'à 30&nbsp;% de devis en plus.
            </p>
          </td>
        </tr>

        <!-- SEPARATEUR LEGER -->
        <tr>
          <td style="background:#141414;padding:0 40px;">
            <div style="height:1px;background:linear-gradient(90deg,#de0917,transparent);"></div>
          </td>
        </tr>

        <!-- BLOC DOULEUR -->
        <tr>
          <td style="background:#141414;padding:36px 40px 0 40px;font-family:'Montserrat',Arial,sans-serif;">
            <p style="margin:0 0 16px 0;font-family:'Montserrat',Arial,sans-serif;font-size:15px;font-weight:300;line-height:1.9;color:#bbbbbb;">
              Vous envoyez un devis. Trois semaines passent. Pas de réponse. Entre deux réunions et les urgences du jour, vous n'avez pas eu le temps de relancer. Et ce devis finit par mourir dans votre boîte mail.
            </p>
            <p style="margin:0 0 16px 0;font-family:'Montserrat',Arial,sans-serif;font-size:15px;font-weight:300;line-height:1.9;color:#bbbbbb;">
              C'est pareil pour les comptes rendus rédigés en fin de journée, les relances clients repoussées au lendemain, les informations éparpillées entre le téléphone, les mails et les post-its.
            </p>
            <p style="margin:0 0 36px 0;font-family:'Montserrat',Arial,sans-serif;font-size:15px;font-weight:700;line-height:1.9;color:#ffffff;">
              Tout ça, c'est du temps que vous ne consacrez pas à votre cœur de métier. Et de l'argent qui ne rentre pas.
            </p>
          </td>
        </tr>

        <!-- BLOC PARCOURS -->
        <tr>
          <td style="background:#141414;padding:0 24px 36px 24px;font-family:'Montserrat',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#121212;border-radius:8px;border-left:4px solid #de0917;font-family:'Montserrat',Arial,sans-serif;">
              <tr>
                <td style="padding:28px 28px 28px 28px;font-family:'Montserrat',Arial,sans-serif;">
                  <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:15px;font-weight:300;line-height:1.9;color:#bbbbbb;font-style:italic;">
                    "Après 18 ans dans le BTP, de manœuvre à directeur technico-commercial, j'ai vécu ces situations. C'est pour ça que j'ai créé NikaIA Automations&nbsp;: pour que ces tâches que l'on n'aime pas faire se fassent toutes seules."
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BASCULE -->
        <tr>
          <td style="background:#141414;padding:0 40px 36px 40px;font-family:'Montserrat',Arial,sans-serif;">
            <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:16px;font-weight:700;line-height:1.7;color:#ffffff;">
              Aujourd'hui, une grande partie de ces tâches peut se faire toute seule.<br/>
              <span style="font-weight:300;color:#888888;font-size:15px;">Sans changer votre façon de travailler.</span>
            </p>
          </td>
        </tr>

        <!-- PREUVE SOCIALE -->
        <tr>
          <td style="background:#141414;padding:0 40px 40px 40px;font-family:'Montserrat',Arial,sans-serif;">
            <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;color:#de0917;text-transform:uppercase;">
              ✓&nbsp;&nbsp;Déjà déployé auprès de plusieurs entreprises BTP et PME en région PACA.
            </p>
          </td>
        </tr>

        <!-- SEPARATEUR -->
        <tr>
          <td style="background:#141414;padding:0 40px;">
            <div style="height:1px;background:#222222;"></div>
          </td>
        </tr>

        <!-- EXEMPLES + METHODE -->
        <tr>
          <td style="background:#141414;padding:36px 40px 16px 40px;font-family:'Montserrat',Arial,sans-serif;">
            <p style="margin:0 0 6px 0;font-family:'Montserrat',Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:4px;color:#de0917;text-transform:uppercase;">Ce que je mets en place</p>
            <h2 style="margin:0 0 20px 0;font-family:'Montserrat',Arial,sans-serif;font-size:22px;font-weight:800;line-height:1.3;color:#ffffff;">Des systèmes simples, utiles et sur mesure</h2>
          </td>
        </tr>

        <tr>
          <td style="background:#141414;padding:0 24px 36px 24px;font-family:'Montserrat',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:'Montserrat',Arial,sans-serif;">
              <tr>
                <td width="49%" valign="top" style="background:#161616;border:1px solid #262626;border-radius:8px;padding:24px 22px;font-family:'Montserrat',Arial,sans-serif;">
                  <p style="margin:0 0 16px 0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:2px;">Ce qu'on automatise</p>
                  <p style="margin:0 0 12px 0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;padding-left:12px;border-left:2px solid #de0917;">Devis et rapport de chantier générés en 2 minutes depuis votre téléphone</p>
                  <p style="margin:0 0 12px 0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;padding-left:12px;border-left:2px solid #de0917;">Devis non signés relancés automatiquement à J+3 et J+7</p>
                  <p style="margin:0 0 12px 0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;padding-left:12px;border-left:2px solid #de0917;">Factures d'acompte et de solde envoyées automatiquement avec vos rapports de chantier et une demande d'avis Google</p>
                  <p style="margin:0 0 12px 0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;padding-left:12px;border-left:2px solid #de0917;">Informations clients et chantiers centralisées en un seul endroit</p>
                  <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:600;line-height:1.7;color:#de0917;padding-left:12px;border-left:2px solid #de0917;">Plus de 50 automatisations prêtes à déployer dans votre activité</p>
                </td>
                <td width="2%"></td>
                <td width="49%" valign="top" style="background:#161616;border:1px solid #262626;border-radius:8px;padding:24px 22px;font-family:'Montserrat',Arial,sans-serif;">
                  <p style="margin:0 0 16px 0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:2px;">Comment on travaille</p>
                  <p style="margin:0 0 14px 0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;"><span style="color:#de0917;font-weight:700;">01</span>&nbsp;&nbsp;On regarde comment vous travaillez aujourd'hui</p>
                  <p style="margin:0 0 14px 0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;"><span style="color:#de0917;font-weight:700;">02</span>&nbsp;&nbsp;On identifie ce qui vous coûte et vous prend le plus de temps</p>
                  <p style="margin:0 0 14px 0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;"><span style="color:#de0917;font-weight:700;">03</span>&nbsp;&nbsp;On met en place, vous testez</p>
                  <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:300;line-height:1.7;color:#a0a0a0;"><span style="color:#de0917;font-weight:700;">04</span>&nbsp;&nbsp;On ajuste ensemble</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- SEPARATEUR -->
        <tr>
          <td style="background:#141414;padding:0 40px;">
            <div style="height:1px;background:#222222;"></div>
          </td>
        </tr>

        <!-- BLOC ROI -->
        <tr>
          <td style="background:#141414;padding:36px 40px 16px 40px;font-family:'Montserrat',Arial,sans-serif;">
            <p style="margin:0 0 6px 0;font-family:'Montserrat',Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:4px;color:#de0917;text-transform:uppercase;">ROI concret</p>
            <h2 style="margin:0 0 28px 0;font-family:'Montserrat',Arial,sans-serif;font-size:22px;font-weight:800;line-height:1.3;color:#ffffff;">Ce que ça vous rapporte concrètement</h2>
          </td>
        </tr>

        <tr>
          <td style="background:#141414;padding:0 24px 36px 24px;font-family:'Montserrat',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#121212;border-radius:8px;font-family:'Montserrat',Arial,sans-serif;">
              <tr>
                <td style="padding:28px 28px 8px 28px;font-family:'Montserrat',Arial,sans-serif;">

                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;font-family:'Montserrat',Arial,sans-serif;">
                    <tr>
                      <td width="4" style="background:#de0917;border-radius:2px;">&nbsp;</td>
                      <td style="padding-left:16px;font-family:'Montserrat',Arial,sans-serif;">
                        <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:#bbbbbb;">Entre <strong style="color:#ffffff;">8 et 12 heures par semaine</strong> passées sur l'administratif. C'est un jour ouvré sur cinq qui ne produit rien.</p>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;font-family:'Montserrat',Arial,sans-serif;">
                    <tr>
                      <td width="4" style="background:#de0917;border-radius:2px;">&nbsp;</td>
                      <td style="padding-left:16px;font-family:'Montserrat',Arial,sans-serif;">
                        <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:#bbbbbb;">Rapporté à l'année, c'est <strong style="color:#ffffff;">22 500&nbsp;€ de temps non facturé</strong> parti en paperasse.</p>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;font-family:'Montserrat',Arial,sans-serif;">
                    <tr>
                      <td width="4" style="background:#de0917;border-radius:2px;">&nbsp;</td>
                      <td style="padding-left:16px;font-family:'Montserrat',Arial,sans-serif;">
                        <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:#bbbbbb;">Dans le BTP, <strong style="color:#ffffff;">7 devis sur 10 n'aboutissent pas</strong>. L'automatisation des relances change cette proportion.</p>
                      </td>
                    </tr>
                  </table>

                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:8px;font-family:'Montserrat',Arial,sans-serif;">
                    <tr>
                      <td width="4" style="background:#de0917;border-radius:2px;">&nbsp;</td>
                      <td style="padding-left:16px;font-family:'Montserrat',Arial,sans-serif;">
                        <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:#bbbbbb;"><strong style="color:#ffffff;">Un retour sur investissement constaté dès le deuxième mois.</strong></p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
              <tr>
                <td style="padding:0 28px 20px 28px;font-family:'Montserrat',Arial,sans-serif;">
                  <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:10px;font-weight:300;color:#444444;line-height:1.6;">
                    Sources&nbsp;: CAPEB, ArtisanSmart, Quai des Entrepreneurs, LW-Works
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#1a1a1a;border-left:3px solid #de0917;padding:32px 40px;font-family:'Montserrat',Arial,sans-serif;">
            <p style="margin:0 0 6px 0;font-family:'Montserrat',Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;color:#de0917;text-transform:uppercase;">
              Diagnostic
            </p>
            <p style="margin:0 0 12px 0;font-family:'Montserrat',Arial,sans-serif;font-size:20px;font-weight:700;color:#ffffff;line-height:1.3;">
              Diagnostic gratuit de 30 minutes, sans engagement
            </p>
            <p style="margin:0 0 24px 0;font-family:'Montserrat',Arial,sans-serif;font-size:14px;font-weight:300;line-height:1.8;color:#888888;">
              Pas besoin d'être à l'aise avec l'informatique. En 30 minutes, vous savez exactement ce qui est automatisable chez vous et ce que ça vous rapporterait concrètement.
            </p>
            <table cellpadding="0" cellspacing="0" border="0" style="font-family:'Montserrat',Arial,sans-serif;">
              <tr>
                <td style="background:#de0917;border-radius:6px;">
                  <a href="https://calendly.com/nikaia-automations" target="_blank"
                     style="display:inline-block;padding:14px 32px;font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#ffffff;text-decoration:none;border-radius:6px;">
                    Je réserve mon diagnostic gratuit →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr><td style="background:#141414;height:32px;"></td></tr>

        <!-- SIGNATURE -->
        <tr>
          <td style="background:#141414;padding:28px 40px;font-family:'Montserrat',Arial,sans-serif;">
            <table cellpadding="0" cellspacing="0" border="0" style="font-family:'Montserrat',Arial,sans-serif;">
              <tr>
                <td style="vertical-align:top;padding-right:14px;padding-top:2px;">
                  <a href="https://nikaia-automations.com" target="_blank">
                    <img src="/logo192.png" alt="NikaIA" width="36" height="36" style="display:block;border:0;border-radius:6px;" />
                  </a>
                </td>
                <td style="vertical-align:middle;font-family:'Montserrat',Arial,sans-serif;">
                  <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:16px;font-weight:700;color:#ffffff;line-height:1.2;">Fred Raspo</p>
                  <p style="margin:3px 0 0 0;font-family:'Montserrat',Arial,sans-serif;font-size:12px;font-weight:400;color:#aaaaaa;line-height:1.4;">
                    Fondateur, Nika<span style="color:#de0917;">IA</span> Automations<br/>
                    <span style="font-size:11px;color:#666666;">18 ans dans le BTP, de manœuvre à directeur technico-commercial</span>
                  </p>
                  <table cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;font-family:'Montserrat',Arial,sans-serif;">
                    <tr>
                      <td style="vertical-align:middle;padding-right:7px;">
                        <a href="https://wa.me/33619251902" target="_blank" style="display:block;line-height:1;">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/16px-WhatsApp.svg.png" width="16" height="16" alt="WhatsApp" style="display:block;border:0;" />
                        </a>
                      </td>
                      <td style="vertical-align:middle;padding-right:16px;">
                        <a href="https://wa.me/33619251902" target="_blank" style="font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;line-height:1;">06 19 25 19 02</a>
                      </td>
                      <td style="vertical-align:middle;padding-right:7px;">
                        <a href="https://linkedin.com/in/fred-raspo-014b1ab5" target="_blank" style="display:block;line-height:1;">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="16" height="16" alt="LinkedIn" style="display:block;border:0;border-radius:3px;" />
                        </a>
                      </td>
                      <td style="vertical-align:middle;">
                        <a href="https://linkedin.com/in/fred-raspo-014b1ab5" target="_blank" style="font-family:'Montserrat',Arial,sans-serif;font-size:13px;font-weight:400;color:#aaaaaa;text-decoration:none;line-height:1;">LinkedIn</a>
                      </td>
                    </tr>
                  </table>
                  <p style="margin:8px 0 0 0;">
                    <a href="https://nikaia-automations.com" target="_blank" style="font-family:'Montserrat',Arial,sans-serif;font-size:12px;font-weight:400;color:#de0917;text-decoration:none;">nikaia-automations.com</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- FOOTER PLAQUETTE -->
        <tr>
          <td style="background:#0d0d0d;border-top:1px solid #1a1a1a;border-radius:0 0 8px 8px;padding:20px 40px;font-family:'Montserrat',Arial,sans-serif;">
            <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-size:11px;font-weight:300;color:#555555;line-height:1.6;text-align:center;">
              Une question avant de réserver&nbsp;? Écrivez-moi sur WhatsApp, je réponds le jour même.
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>`;

export default function Presentation() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Navbar onContact={() => setIsContactOpen(true)} />
      <div
        style={{ paddingTop: "80px" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <Footer onContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
