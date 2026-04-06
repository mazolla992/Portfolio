'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import PlanDropdown, { PLAN_OPTIONS } from '@/components/PlanDropdown'

// ─── Business type dropdown (local, not reused elsewhere) ─────────────────────

const BUSINESS_TYPES = {
  priority: ['Компьютерный клуб', 'Салон красоты', 'Автосервис'],
  secondary: [
    'Стоматология',
    'Фитнес-клуб',
    'Барбершоп',
    'Кафе / Ресторан',
    'Nail-студия',
    'Массажный кабинет',
    'Медицинский центр',
    'Языковая школа',
    'Детский центр',
    'Фотостудия',
    'Юридические услуги',
    'Другое',
  ],
}

function planFromQuery(q: string | null): string {
  if (!q) return ''
  const found = PLAN_OPTIONS.find((p) => p.value === q)
  return found ? found.value : ''
}

interface DropdownProps {
  value: string
  onChange: (val: string) => void
  placeholder: string
  error?: string
  children: React.ReactNode
}

function Dropdown({ value, onChange, placeholder, error, children }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-left flex items-center justify-between transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${
          error ? 'border-red-400' : open ? 'border-brand-600' : 'border-gray-200'
        }`}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-20 mt-1.5 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
          <div className="max-h-64 overflow-y-auto py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

function OptionItem({
  value,
  selected,
  onSelect,
  children,
}: {
  value: string
  selected: boolean
  onSelect: (v: string) => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-2 transition-colors hover:bg-brand-50 ${
        selected ? 'bg-brand-50 text-brand-700 font-medium' : 'text-gray-700'
      }`}
    >
      {children}
      {selected && (
        <svg className="w-4 h-4 text-brand-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  )
}

function OptionGroup({ label }: { label: string }) {
  return (
    <p className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
      {label}
    </p>
  )
}

// ─── Form ─────────────────────────────────────────────────────────────────────

function StartForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState({
    businessType: '',
    businessName: '',
    city: '',
    ownerName: '',
    telegram: '',
    phone: '',
    plan: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam) {
      setForm((prev) => ({ ...prev, plan: planFromQuery(planParam) }))
    }
  }, [searchParams])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.businessType) e.businessType = 'Выберите тип бизнеса'
    if (!form.businessName.trim()) e.businessName = 'Введите название'
    if (!form.ownerName.trim()) e.ownerName = 'Введите имя'
    if (!form.telegram.trim()) e.telegram = 'Введите Telegram'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    if (!form.plan) e.plan = 'Выберите пакет'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const errs = validate()
  if (Object.keys(errs).length > 0) { setErrors(errs); return }
  
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) throw new Error()
    setSubmitted(true)
  } catch {
    alert('Ошибка при отправке. Попробуйте ещё раз.')
  }
}

  const set = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h2>
        <p className="text-gray-500 mb-6">Мы свяжемся с вами в Telegram в течение дня.</p>
        <Link href="/" className="btn-primary">На главную</Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Business type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Тип бизнеса <span className="text-red-500">*</span>
        </label>
        <Dropdown
          value={form.businessType}
          onChange={(v) => set('businessType', v)}
          placeholder="Выберите тип"
          error={errors.businessType}
        >
          <OptionGroup label="Популярные" />
          {BUSINESS_TYPES.priority.map((t) => (
            <OptionItem key={t} value={t} selected={form.businessType === t} onSelect={(v) => set('businessType', v)}>
              {t}
            </OptionItem>
          ))}
          <OptionGroup label="Другие" />
          {BUSINESS_TYPES.secondary.map((t) => (
            <OptionItem key={t} value={t} selected={form.businessType === t} onSelect={(v) => set('businessType', v)}>
              {t}
            </OptionItem>
          ))}
        </Dropdown>
        {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>}
      </div>

      {/* Business name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Название заведения <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.businessName}
          onChange={(e) => set('businessName', e.target.value)}
          placeholder="Например: NiceOne"
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
            errors.businessName ? 'border-red-400' : 'border-gray-200'
          }`}
        />
        {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Город</label>
        <input
          type="text"
          value={form.city}
          onChange={(e) => set('city', e.target.value)}
          placeholder="Например: Гатчина"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
        />
      </div>

      {/* Owner name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Имя владельца <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.ownerName}
          onChange={(e) => set('ownerName', e.target.value)}
          placeholder="Например: Алексей"
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
            errors.ownerName ? 'border-red-400' : 'border-gray-200'
          }`}
        />
        {errors.ownerName && <p className="text-red-500 text-xs mt-1">{errors.ownerName}</p>}
      </div>

      {/* Telegram */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Telegram <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">@</span>
          <input
            type="text"
            value={form.telegram}
            onChange={(e) => set('telegram', e.target.value)}
            placeholder="username"
            className={`w-full pl-8 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
              errors.telegram ? 'border-red-400' : 'border-gray-200'
            }`}
          />
        </div>
        {errors.telegram && <p className="text-red-500 text-xs mt-1">{errors.telegram}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Телефон <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => set('phone', e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
            errors.phone ? 'border-red-400' : 'border-gray-200'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Plan */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Выбранный пакет <span className="text-red-500">*</span>
        </label>
        <PlanDropdown
          value={form.plan}
          onChange={(v) => set('plan', v)}
          error={errors.plan}
        />
        {errors.plan && <p className="text-red-500 text-xs mt-1">{errors.plan}</p>}
      </div>

      <button type="submit" className="btn-primary w-full py-4 text-base mt-2">
        Отправить заявку
      </button>

      <p className="text-xs text-gray-400 text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StartPage() {
  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-700 mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          На главную
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Оставить заявку</h1>
          <p className="text-gray-500">Заполните форму и мы свяжемся с вами в течение дня</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <Suspense>
            <StartForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
