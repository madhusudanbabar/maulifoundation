<template>
  <div class="container-fluid">
    <div class="contact">
      <div class="contact__left">
        <h2 class="contact__heading">Contact Us</h2>
        <p class="contact__meta">
          If you would like to know more about our initiatives, volunteer
          opportunities, or how you can contribute contact us at
          <a class="contact__mail" href="mailto:contact@maulifoundation.org">
            contact@maulifoundation.org </a
          >. Join hands with Mauli Foundation as we work towards building a more
          inclusive and compassionate world for all. Remember, every small act
          of kindness counts. Together, we can be the change these lives
          deserve.
        </p>
        <div class="contact__social">
          <span class="contact__social-heading">Connect with me on: </span>
          <div class="contact__links">
            <nuxt-link
              :to="social.link"
              target="_new"
              v-for="social in socialLinks"
            >
              <font-awesome-icon
                class="contact__icon"
                size="2x"
                :icon="['fab', social.icon]"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="contact__right">
        <form method="post" ref="form" class="form">
          <div class="form__field">
            <input name="name" id="name" class="form__input" placeholder=" " />
            <label for="name" class="form__label">Name</label>
          </div>
          <div class="form__field">
            <input
              name="email"
              id="email"
              type="email"
              class="form__input"
              placeholder=" "
            />
            <label for="email" class="form__label">Email</label>
          </div>
          <div class="form__field">
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder=" "
              class="form__input"
            />
            <label class="form__label" for="message">Message</label>
          </div>
          <button type="submit" class="cta form__cta">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div class="container-fluid footer">
    <h3 class="footer__note">
      Crafted with <span class="footer__emoji">💖</span> by krypton
      <span class="footer__emoji">👨‍💻</span>
    </h3>
  </div>
</template>

<script setup>
const socialLinks = [
  //   {
  //     to: "#",
  //     icon: "",
  //   },
];
</script>

<style lang="scss">
.contact {
  display: flex;
  flex-flow: column nowrap;
  padding: 5rem 1.5rem;
  max-width: 110rem;
  margin-inline: auto;

  @include respond(desktop) {
    flex-flow: row wrap;
    padding-block: 12.5rem 7.5rem;
  }

  &__left {
    flex: 0 0 50%;
  }

  &__heading {
    color: $color-secondary;
    letter-spacing: 0.125rem;
    margin-bottom: 2rem;
    font-size: 5rem;
    text-align: left;
    font-family: Poppins;
  }

  &__meta {
    line-height: 1.5;
    width: clamp(30ch, 80%, 70rem);
  }

  &__mail {
    color: $blue-dark-2;
    text-decoration: none;
  }

  &__social {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  &__links {
    display: flex;
    gap: 1rem;
    margin-block: 0.5rem;
    align-items: center;
  }

  &__icon {
    color: $color-secondary;
  }

  &__fig {
    width: 100%;
    overflow: hidden;
    display: block;
  }

  &__avatar {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  &__right {
    flex: 0 0 50%;
  }
}

.container-fluid:has(.contact) {
  background: $violet-darker;
}

.form {
  display: flex;
  flex-flow: column;
  gap: 3.5rem;
  margin-top: 5rem;
  max-width: 100%;

  @include respond(desktop) {
    margin-top: 0;
  }

  &__field {
    position: relative;
    --left: 2rem;
  }

  &__input {
    font-size: 1.6rem;
    width: 100%;
    padding: 1rem var(--left);
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid transparentize($color: $color-secondary-2, $amount: 0.5);
    color: $red-light;

    &:focus-visible {
      outline: 2px solid
        transparentize($color: $color-secondary-2, $amount: 0.5);
    }

    &:focus + .form__label {
      top: -1.5rem;
      left: 0;
      font-size: 1.4rem;
    }
  }

  &__label {
    position: absolute;
    top: 2rem;
    transform: translateY(-50%);
    left: var(--left);
    font-size: 1.6rem;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  &__input:not(:placeholder-shown) + label {
    top: -1.5rem;
    left: 0;
    font-size: 1.4rem;
  }

  &__cta {
    align-self: center;
    background-color: $color-secondary;
  }
}

.footer {
  background-color: $violet-darker;
  padding: 2rem 1.5rem;

  &__note {
    text-align: center;
    font-size: 2rem;
    font-family: var(--font-system);
    font-weight: 400;
    line-height: 1.5;
  }

  &__emoji {
    font-size: 0.8em;

    &:first-child {
      animation: infinite sparkle 3s;
    }
  }
}
</style>
